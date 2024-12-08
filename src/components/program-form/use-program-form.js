import { useState, useEffect } from 'react';
import { 
	emptyData, 
	createHandleChange, 
	createHandleWorkoutChange, 
	createHandleExerciseChange, 
	createAddWorkout, 
	createAddExercise 
} from './handlers';

export const useProgramForm = (initialProgram = null) => {

	const [formData, setFormData] = useState(emptyData());

	useEffect(() => {
	    if (initialProgram) {
	        const formattedData = Object.entries(initialProgram).reduce((acc, [key, value]) => {
	            if (key === 'workouts' && Array.isArray(value)) {
	                acc[key] = value.map((workout) => ({
	                    ...workout,
	                    muscleGroups: (workout.muscleGroups || []).join(', '),
	                }));
	            } else if (Array.isArray(value)) {
	                acc[key] = value.join(', ');
	            } else {
	                acc[key] = value || '';
	            }
	            return acc;
	        }, {});
	        setFormData(formattedData);
	    }
	}, [initialProgram]);

    const handleChange = createHandleChange(setFormData);
    const handleWorkoutChange = createHandleWorkoutChange(setFormData);
    const handleExerciseChange = createHandleExerciseChange(setFormData);
    const addWorkout = createAddWorkout(setFormData);
    const addExercise = createAddExercise(setFormData);

    return {
        formData,
        setFormData,
        handleChange,
        handleWorkoutChange,
        handleExerciseChange,
        addWorkout,
        addExercise,
    };
}