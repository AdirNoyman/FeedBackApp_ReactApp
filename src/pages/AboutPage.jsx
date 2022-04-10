import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<Card>
			<div className='about'>
				<h1>About this project</h1>
				<p>This a React app</p>
				<p>Version: 1.0.0</p>
				<Link to='/'>Back to Home</Link>
			</div>
		</Card>
	);
};

export default AboutPage;
