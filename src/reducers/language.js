
const updateLanguage = (state, action) => {

	if (state === undefined) {
	    return {
	      lang: 'en'
	    };
  	}

  	switch (action.type) {
  		case 'SET_LANGUAGE':
  			return {
  				lang: action.payload
  			};
  		default:
  			return state.language
  	}
}

export default updateLanguage;