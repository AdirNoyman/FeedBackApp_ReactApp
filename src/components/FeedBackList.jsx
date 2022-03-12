import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedBackList = ({ feedBack, handelDelete }) => {
	if (!feedBack || feedBack.length === 0) {
		return <p>Sorry, No feedback yet 😒</p>;
	}

	return (
		<div className='feedback-list'>
			{feedBack.map(item => (
				<FeedbackItem
					item={item}
					key={item.id}
					handelDelete={handelDelete}
				/>
			))}
		</div>
	);
};

FeedBackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedBackList;
