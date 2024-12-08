import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SessionDetailsForm from './session-details-form';
import { addExercise, addSet, changeExercise, changeSet, deleteSet, change } from '../../actions';


const SessionDetailsFormContainer = ({sessionDetails, addExercise, addSet, changeExercise, changeSet, change, deleteSet, setDay}) => {

	const navigate = useNavigate();

	const handleAddExercise = () => {
        addExercise();
    };

    const handleAddSet = (exerciseId) => {
	    addSet(exerciseId);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    	
    	navigate('/training-log/session-details/results');
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		change(name, value);
	}

	const handleChangeExercise = (e, id) => {
	    const { name, value } = e.target;
    	changeExercise(id, name, value);
	};

	const handleChangeSet = (e, setId, exId) => {
	    const { name, value } = e.target;
    	changeSet(setId, exId, name, value);
	};

	const handleDeleteSet = (setId, exId) => {
	    deleteSet(setId, exId)
	};

	return (
		<div>
			<SessionDetailsForm 
				handleSubmit={handleSubmit}
				handleChangeExercise={handleChangeExercise}
				formData={sessionDetails} 
				handleAddExercise={handleAddExercise}
				handleAddSet={handleAddSet}
				handleChangeSet={handleChangeSet}
				handleDeleteSet={handleDeleteSet}
				handleChange={handleChange} />
		</div>
	)
}

const mapStateToProps = ({ sessionDetails }) => {
	return { sessionDetails }
}

const mapDispatchToProps = (dispatch) => {
	return {
		addExercise: () => dispatch(addExercise()), 
		addSet: (exId) => dispatch(addSet(exId)), 
		changeExercise: (id, name, value) => dispatch(changeExercise(id, name, value)), 
		changeSet: (setId, exId, name, value) => dispatch(changeSet(setId, exId, name, value)), 
		deleteSet: (setId, exId) => dispatch(deleteSet(setId, exId)), 
		change: (name, value) => dispatch(change(name, value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionDetailsFormContainer);