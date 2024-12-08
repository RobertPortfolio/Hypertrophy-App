
export const emptyData = () => {
    return {
        programName: '',
        mainGoal: '',
        tags: '',
        description: '',
        shortDescription: '',
        type: '',
        level: '',
        equipment: '',
        daysPerWeek: '',
        photo: '',
        workouts: [],
    }
}

export const emptyWorkout = () => {
    return { 
        dayName: '', 
        muscleGroups: '', 
        workoutDescription: '', 
        exercises: [] 
    }
}

export const emptyExercise = () => {
    return { 
        exerciseName: '', 
        sets: '', 
        exerciseDescription: '', 
        reps: '', 
        rir: '' 
    }
}

export const createHandleChange = (setFormData) => (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

export const createHandleWorkoutChange = (setFormData) => (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
	    const updatedWorkouts = [...prev.workouts];
	    updatedWorkouts[index] = { ...updatedWorkouts[index], [name]: value };
	    return { ...prev, workouts: updatedWorkouts };
	});
};

export const createHandleExerciseChange = (setFormData) => (e, workoutIndex, exerciseIndex) => {
    const { name, value } = e.target;
    setFormData((prev) => {
	    const updatedWorkouts = [...prev.workouts];
	    const exercises = updatedWorkouts[workoutIndex].exercises || [];
	    exercises[exerciseIndex] = { ...exercises[exerciseIndex], [name]: value };
	    updatedWorkouts[workoutIndex].exercises = exercises;
	    return { ...prev, workouts: updatedWorkouts };
	});
};

export const createAddWorkout = (setFormData) => () => {
    setFormData((prev) => ({
        ...prev,
        workouts: [...prev.workouts, emptyWorkout()],
    }));
};

export const createAddExercise = (setFormData) => (workoutIndex) => {
	setFormData((prev) => {
	    const updatedWorkouts = [...prev.workouts];
	    updatedWorkouts[workoutIndex].exercises = [
	        ...(updatedWorkouts[workoutIndex].exercises || []),
	        emptyExercise(),
	    ];
	    return { ...prev, workouts: updatedWorkouts }
	})
};