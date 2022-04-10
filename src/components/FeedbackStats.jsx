import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedBack } = useContext(FeedbackContext);

	// Calcualte ratings average
	let average = feedBack.reduce((acc, cur) => {
		return acc + cur.rating;
	}, 0);

	average = (average / feedBack.length).toFixed(1).replace(/[.,]0$/, '');

	average = isNaN(average) ? 0 : average;

	return (
		<div className='feedback-stats'>
			<h4>{feedBack.length} Reviews</h4>
			<h4>Average Rating: {average}</h4>
		</div>
	);
}

export default FeedbackStats;
