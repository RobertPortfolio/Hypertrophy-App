import React from 'react';
import { useDispatch } from 'react-redux';
import { addProgram } from '../../actions';
import ProgramForm from './program-form';
import { useProgramForm } from './use-program-form';

const AddProgramFormContainer = () => {

	const dispatch = useDispatch();

    const {
        formData,
        handleChange,
        handleWorkoutChange,
        handleExerciseChange,
        addWorkout,
        addExercise,
    } = useProgramForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const program = {
                ...formData,
                equipment: formData.equipment.split(',').map((item) => item.trim()),
                tags: formData.tags.split(',').map((item) => item.trim()),
                workouts: formData.workouts.map((workout) => ({
				    ...workout,
				    muscleGroups: workout.muscleGroups.split(',').map((item) => item.trim()), 
				})),
            };
            await dispatch(addProgram(program));
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

	return (
		<ProgramForm 
			formData={formData} 
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			handleWorkoutChange={handleWorkoutChange} 
			handleExerciseChange={handleExerciseChange}
			addWorkout={addWorkout}
			addExercise={addExercise}
            textSubmit="Add"
		/>
	)
}

export default AddProgramFormContainer;