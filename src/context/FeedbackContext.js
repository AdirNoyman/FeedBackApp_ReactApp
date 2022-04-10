import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedBack, setFeedback] = useState([
		{
			id: 1,
			text: 'This item number 1 from the context',
			rating: 10,
		},
		{
			id: 2,
			text: 'This item number 2 from the context',
			rating: 8,
		},
		{
			id: 3,
			text: 'This item number 3 from the context',
			rating: 9,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedBack]);
	};

	// Delete feedback
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			const newList = feedBack.filter(item => item.id !== id);
			setFeedback(newList);
		}
	};

	// Update feedback item
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedBack.map(item =>
				item.id === id ? { ...item, ...updItem } : item
			)
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
