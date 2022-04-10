import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackForm() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handelTextChange = e => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters long 🤨');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(e.target.value);
	};

	const handelSubmit = e => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}

			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handelSubmit}>
				<h2>How would you rate our service? 🤨</h2>
				<RatingSelect select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handelTextChange}
						type='text'
						placeholder='Your review...'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedBackForm;
