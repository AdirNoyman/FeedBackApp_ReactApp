import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedBackList = () => {
	const { feedBack } = useContext(FeedbackContext);

	if (!feedBack || feedBack.length === 0) {
		return <p>Sorry, No feedback yet 😒</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{' '}
				{feedBack.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<FeedbackItem item={item} key={item.id} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// 	return (
	// 	<div className='feedback-list'>
	// 		{feedBack.map(item => (
	// 			<FeedbackItem
	// 				item={item}
	// 				key={item.id}
	// 				handelDelete={handelDelete}
	// 			/>
	// 		))}
	// 	</div>
	// );
};

export default FeedBackList;
