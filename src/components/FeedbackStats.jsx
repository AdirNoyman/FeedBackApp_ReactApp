import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedBack }) {
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

FeedbackStats.propTypes = {
	feedBack: PropTypes.array.isRequired,
};

export default FeedbackStats;
