
const updateProgram = (state, action) => {

	if (state === undefined) {
	    return {
	    	loading: false,
	      	program: null,
            programs: [],
	      	error: null,
	    };
  	}

  	switch (action.type) {
        case 'PROGRAM_REQUESTED':
            return {
                ...state.program,
                loading: true,
                error: null,
            };
        case 'PROGRAM_LOADED':
            return {
                ...state.program,
                loading: false,
                program: action.payload,
                error: null,
            };
        case 'PROGRAM_ERROR':
            return {
                ...state.program,
                loading: false,
                error: action.payload,
            };
        case 'PROGRAMS_REQUESTED':
            return {
                ...state.program,
                loading: true,
                error: null,
            };
        case 'PROGRAMS_LOADED':
            return {
                ...state.program,
                loading: false,
                programs: action.payload,
                error: null,
            };
        case 'PROGRAMS_ERROR':
            return {
                ...state.program,
                loading: false,
                error: action.payload,
            };
  		default:
  			return state.program
  	}
}

export default updateProgram;