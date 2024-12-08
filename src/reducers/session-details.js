
const updateSessionDetails = (state, action) => {
	if (state === undefined) {
	    return {
		  day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
		  notes: '',
		  exercises: [ getEmptyExercise() ],
		};
  	}

  	switch (action.type) {
	    case 'CHANGE':
	      return { ...state.sessionDetails, [action.payload.name]: action.payload.value };

	    case 'ADD_EXERCISE':
	      return {
	        ...state.sessionDetails,
	        exercises: [
	          ...state.sessionDetails.exercises,
	          getEmptyExercise(),
	        ],
	      };

	    case 'ADD_SET':
	      return {
	        ...state.sessionDetails,
	        exercises: state.sessionDetails.exercises.map((exercise) =>
	          exercise.id === action.payload
	            ? {
	                ...exercise,
	                sets: [
	                  ...exercise.sets,
	                  getEmptySet(),
	                ],
	              }
	            : exercise
	        ),
	      };

	    case 'CHANGE_EXERCISE':
	      return {
	        ...state.sessionDetails,
	        exercises: state.sessionDetails.exercises.map((exercise) =>
	          exercise.id === action.payload.id
	            ? { ...exercise, [action.payload.name]: action.payload.value }
	            : exercise
	        ),
	      };

	    case 'CHANGE_SET':
	      return {
	        ...state.sessionDetails,
	        exercises: state.sessionDetails.exercises.map((exercise) =>
	          exercise.id === action.payload.exId
	            ? {
	                ...exercise,
	                sets: exercise.sets.map((set) =>
	                  set.id === action.payload.setId
	                    ? { ...set, [action.payload.name]: action.payload.value }
	                    : set
	                ),
	              }
	            : exercise
	        ),
	      };

	    case 'DELETE_SET':
	      return {
	        ...state.sessionDetails,
	        exercises: state.sessionDetails.exercises.map((exercise) =>
	          exercise.id === action.payload.exId
	            ? {
	                ...exercise,
	                sets: exercise.sets.filter((set) => set.id !== action.payload.setId),
	              }
	            : exercise
	        ),
	      };

	    default:
	      return state.sessionDetails;
	}
}

const getEmptyExercise = () => {
	return {
      id: Date.now(),
      name: '',
      sets: [ getEmptySet() ]
    }
}

const getEmptySet = () => {
	return {
      id: Date.now(),
      weight: '',
      reps: '',
      rir: '',
    }
}

export default updateSessionDetails;