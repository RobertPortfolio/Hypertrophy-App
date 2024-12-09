
const updateAuth = (state, action) => {
	if (state === undefined) {
	    return {
		  	isAuthenticated: false,
    		user: null,
    		loading: false,
    		loginError: null,
    		registerError: null,
    		logoutError: null,
    		message: null,
		};
  	}

  	switch (action.type) {
  		case 'REGISTER_REQUESTED':
            return {
                ...state.auth,
                registerError: null,
                loading: true,
            };
        case 'REGISTER_ERROR':
            return {
                ...state.auth,
                loading: false,
                registerError: action.payload,
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
                loginError: null,
                loading: true,
            };
        case 'LOGIN_ERROR':
            return {
                ...state.auth,
                loading: false,
                loginError: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state.auth,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };   
        case 'LOGOUT_REQUESTED':
            return {
                ...state.auth,
                loading: true,
               	logoutError: null,
            }; 
        case 'LOGOUT_ERROR':
            return {
                ...state.auth,
                loading: false,
                logoutError: action.payload,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state.auth,
                loading: false,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state.auth;
  	}
}

export default updateAuth;