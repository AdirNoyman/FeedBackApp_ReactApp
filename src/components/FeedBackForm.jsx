import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';

function FeedBackForm() {
	const [text, setText] = useState('');

	const handelTextChange = e => {
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate our service? 🤨</h2>
				{/*@todo - rating select component */}
				<div className='input-group'>
					<input
						onChange={handelTextChange}
						type='text'
						placeholder='Your review...'
						value={text}
					/>
					<button type='submit'>Send</button>
				</div>
			</form>
		</Card>
	);
}

export default FeedBackForm;