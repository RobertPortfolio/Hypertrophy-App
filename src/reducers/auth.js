
const updateAuth = (state, action) => {
	if (state === undefined) {
	    return {
		  	isAuthenticated: false,
    		user: null,
    		loading: false,
    		error: null,
    		message: null,
		};
  	}

  	switch (action.type) {
  		case 'REGISTER_REQUESTED':
            return {
                ...state.auth,
                error: null,
                loading: true,
            };
        case 'REGISTER_ERROR':
            return {
                ...state.auth,
                loading: false,
                error: action.payload,
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state.auth,
                loading: false,
                message: action.payload,
            };
        case 'LOGIN_REQUESTED':
            return {
                ...state.auth,
                error: null,
                loading: true,
            };
        case 'LOGIN_ERROR':
            return {
                ...state.auth,
                loading: false,
                error: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state.auth,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };    
        case 'LOGOUT_SUCCESS':
            return {
                ...state.auth,
                loading: false,
                error: null,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state.auth;
  	}
}

export default updateAuth;