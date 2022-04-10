import React from 'react';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header text={'Something'} />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedBackForm />
									<FeedbackStats />
									<FeedBackList />
								</>
							}
						/>

						<Route path='/about' element={<AboutPage />} />
					</Routes>
				</div>
				<AboutIconLink />
			</Router>
		</FeedbackProvider>
	);
};

export default App;
