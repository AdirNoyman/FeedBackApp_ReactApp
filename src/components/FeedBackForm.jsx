import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedBackForm() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

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

	return (
		<Card>
			<form>
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
