import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProgram, fetchProgram } from '../../actions';
import ProgramForm from './program-form';
import { useProgramForm } from './use-program-form';

const UpdateProgramFormContainer = () => {

    const { id } = useParams();

    const navigate = useNavigate();

	const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProgram(id)); // Запрос данных программы
    }, [dispatch, id]);

    const { program, loading, error } = useSelector(state => state.program);

    const {
        formData,
        handleChange,
        handleWorkoutChange,
        handleExerciseChange,
        addWorkout,
        addExercise,
    } = useProgramForm(program);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProgram = {
                ...formData,
                equipment: formData.equipment.split(',').map((item) => item.trim()),
                tags: formData.tags.split(',').map((item) => item.trim()),
                workouts: formData.workouts.map((workout) => ({
				    ...workout,
				    muscleGroups: workout.muscleGroups.split(',').map((item) => item.trim()), 
				})),
            };
            await dispatch(updateProgram(program._id, updatedProgram));
            navigate(`/programs/${program._id}`);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Показываем индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Обработка ошибки
    }

	return (
		<ProgramForm 
			formData={formData} 
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			handleWorkoutChange={handleWorkoutChange} 
			handleExerciseChange={handleExerciseChange}
			addWorkout={addWorkout}
			addExercise={addExercise}
            textSubmit="Update"
		/>
	)
}

export default UpdateProgramFormContainer;