import updateLanguage from './language';
import updateFormData from './form-data';

const reducer = (state, action) => {

	return{
		language: updateLanguage(state, action),
		formData: updateFormData(state, action)
	};

};
export default reducer;