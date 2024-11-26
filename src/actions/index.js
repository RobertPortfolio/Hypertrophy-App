
const setLanguage = (language) => {
	return {
		type: 'SET_LANGUAGE',
		payload: language
	}
}

const setFormData = (name, value) => {
	return {
		type: 'SET_FORM_DATA',
		payload: { name, value }
	}
}

export {
	setLanguage,
	setFormData
};