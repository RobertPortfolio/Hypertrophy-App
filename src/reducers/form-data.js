
const updateFormData = (state, action) => {

	if (state === undefined) {
	    return {
	      goal: '',
		  weight: '',
		  height: '',
		  age: '',
		  gender: '',
		  activity: '',
		  fatPercentage: '',
	    };
  	}

  	switch (action.type) {
  		case 'SET_FORM_DATA':
  			return {
  				...state.formData,
  				[action.payload.name]: action.payload.value
  			};
  		default:
  			return state.formData
  	}
}

export default updateFormData;