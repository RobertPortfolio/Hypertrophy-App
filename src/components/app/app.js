import React from 'react';
import Header from '../header';
import { Routes, Route } from 'react-router-dom';
import { 
	HomePage, 
	CalorieCalcPage, 
	CalorieCalcResultsPage, 
	AboutPage,
	TrainingLogPage,
	SessionDetailsPage,
} from '../pages';
import './app.css';

const App = () => {

	return (
		<div className="container-fluid p-0">
			<div className="container-sm">
				<Header />
			</div>
			<div className="header-divider"></div>
			
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/calorie-calc" element={<CalorieCalcPage />}/>
				<Route path="/calorie-calc/results" element={<CalorieCalcResultsPage />}/>
				<Route path="/training-log" element={<TrainingLogPage />}/>
				<Route path="/training-log/session-details" element={<SessionDetailsPage />}/> 
				<Route path="/about" element={<AboutPage />}/>
			</Routes>
		</div>
	)
};

export default App;