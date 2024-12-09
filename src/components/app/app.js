import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../actions';
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
	RegisterPage,
	LoginPage,
} from '../pages';
import './app.css';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const userToken = jwtDecode(token);
                console.log(`Decoded user:`, userToken);
                dispatch(loginSuccess(userToken));
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, [dispatch]);

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

					<Route path="/register" element={<RegisterPage />} />
                	<Route path="/login" element={<LoginPage />} />
				</Routes>
			</div>
		</div>
	)
};

export default App;