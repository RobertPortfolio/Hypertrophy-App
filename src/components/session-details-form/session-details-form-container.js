import React, { useState } from 'react';
import SessionDetailsForm from './session-details-form';


const SessionDetailsFormContainer = () => {

	const today = new Date();

	const createEmptyExercise = () => ({
	  	id: Date.now(), 
	  	name: '', 
	  	sets: [ createEmptySet() ],
	});

	const createEmptySet = () => ({
	  	id: Date.now(), 
	  	weight: '', 
	  	reps: '',
	  	rir: '',
	});

	const [formData, setFormData] = useState({
		day: today.toLocaleDateString('en-US', { weekday: 'long' }),
		exercises: [ createEmptyExercise() ],
	});



	const handleAddExercise = () => {
        setFormData((prevData) => ({
        	...prevData, 
        	exercises: [...prevData.exercises, createEmptyExercise() ]
        }));
    };

    const handleAddSet = (exerciseId) => {
	    setFormData((prevData) => ({
	        ...prevData,
	        exercises: prevData.exercises.map((exercise) =>
	            exercise.id === exerciseId
	                ? { ...exercise, sets: [...exercise.sets, createEmptySet()] }
	                : exercise
	        ),
	    }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    	console.log('Form Data:', formData);
	}

	const handleChange = (e, id) => {
	    const { name, value } = e.target;
	    setFormData((prevData) => ({
	        ...prevData,
	        exercises: prevData.exercises.map((exercise) =>
	            exercise.id === id ? { ...exercise, [name]: value } : exercise
	        ),
	    }));
	};

	const handleChangeSet = (e, setId, exId) => {
	    const { name, value } = e.target;
	    setFormData((prevData) => ({
	        ...prevData,
	        exercises: prevData.exercises.map((exercise) =>
	            exercise.id === exId
	                ? {
	                      ...exercise,
	                      sets: exercise.sets.map((set) =>
	                          set.id === setId ? { ...set, [name]: value } : set
	                      ),
	                  }
	                : exercise
	        ),
	    }));
	};

	const handleDeleteSet = (setId, exId) => {
	    setFormData((prevData) => ({
	        ...prevData,
	        exercises: prevData.exercises.map((exercise) =>
	            exercise.id === exId
	                ? {
	                      ...exercise,
	                      sets: exercise.sets.filter((set) => set.id !== setId),
	                  }
	                : exercise
	        ),
	    }));
	};

	return (
		<div>
			<SessionDetailsForm 
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				formData={formData} 
				handleAddExercise={handleAddExercise}
				handleAddSet={handleAddSet}
				handleChangeSet={handleChangeSet}
				handleDeleteSet={handleDeleteSet}/>
		</div>
	)
}

export default SessionDetailsFormContainer;