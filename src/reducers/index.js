import updateLanguage from './language';
import updateFormData from './form-data';
import updateSessionDetails from './session-details';
import updateProgram from './program';
import updateAuth from './auth';

const reducer = (state, action) => {

	return{
		language: updateLanguage(state, action),
		formData: updateFormData(state, action),
		sessionDetails: updateSessionDetails(state, action),
		program: updateProgram(state, action),
		auth: updateAuth(state, action),
	};

};
export default reducer;