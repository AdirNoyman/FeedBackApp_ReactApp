import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedBack, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedbackData();
	}, []);

	// Fetch feedback data
	const fetchFeedbackData = async () => {
		const response = await fetch(`/feedback?_sort=id&_order=desc`);

		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	// Add feedback
	const addFeedback = async newFeedback => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();
		setFeedback([data, ...feedBack]);
	};

	// Delete feedback
	const deleteFeedback = async id => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/feedback/${id}`, { method: 'DELETE' });

			const newList = feedBack.filter(item => item.id !== id);
			setFeedback(newList);
		}
	};

	// Update feedback item
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updItem),
		});

		// Parse the response object to JS
		const data = await response.json();

		setFeedback(
			feedBack.map(item => (item.id === id ? { ...item, ...data } : item))
		);

		setFeedbackEdit({
			item: {},
			edit: false,
		});
	};

	// Set item to be edited
	const editFeedBack = item => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		// children are the components that need acces to our store of data
		<FeedbackContext.Provider
			value={{
				isLoading,
				feedBack,
				feedbackEdit,
				addFeedback,
				deleteFeedback,
				editFeedBack,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
