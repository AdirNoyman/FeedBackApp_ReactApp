import React from 'react';
import { useState } from 'react';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import feedBackData from './data/FeedbackData';

const App = () => {
	const [feedBack, setFeedback] = useState(feedBackData);

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			const newList = feedBack.filter(item => item.id !== id);
			setFeedback(newList);
		}
	};

	return (
		<>
			<Header text={'Something'} />
			<div className='container'>
				<FeedBackForm />
				<FeedbackStats feedBack={feedBack} />
				<FeedBackList
					feedBack={feedBack}
					handelDelete={deleteFeedback}
				/>
			</div>
		</>
	);
};

export default App;
