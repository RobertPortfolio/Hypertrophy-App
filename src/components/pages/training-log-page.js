import React from 'react';
import { Link } from 'react-router-dom';
import SessionDetailsPage from './session-details-page';

const TrainingLogPage = () => {
	return (
		<Link to="/training-log/session-details" element={<SessionDetailsPage />} >
			Записать данные о тренировке
		</Link>
	)
}

export default TrainingLogPage;