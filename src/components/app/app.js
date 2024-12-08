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
	SessionDetailsResultsPage,
	ProgramsPage,
	AddProgramPage,
	UpdateProgramPage,
	ProgramDetailsPage,
} from '../pages';
import { Register, Login, Logout } from '../auth-test';
import './app.css';

const App = () => {

	return (
		<div className="container-fluid p-0">
			<div className="container-sm">
				<Header />
			</div>
			<div className="header-divider"></div>
			<div className="container-sm">
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/calorie-calc" element={<CalorieCalcPage />}/>
					<Route path="/calorie-calc/results" element={<CalorieCalcResultsPage />}/>
					<Route path="/training-log" element={<TrainingLogPage />}/>
					<Route path="/training-log/session-details" element={<SessionDetailsPage />}/> 
					<Route path="/training-log/session-details/results" element={<SessionDetailsResultsPage />}/> 
					<Route path="/about" element={<AboutPage />}/>
					<Route path="/programs" element={<ProgramsPage />} />
					<Route path="/programs/add-program" element={<AddProgramPage />} />
					<Route path="/programs/:id" element={<ProgramDetailsPage />}/>
					<Route path="/programs/update/:id" element={<UpdateProgramPage />}/>

					<Route path="/register" element={<Register />} />
                	<Route path="/login" element={<Login />} />
                	<Route path="/logout" element={<Logout />} />
				</Routes>
			</div>
		</div>
	)
};

export default App;