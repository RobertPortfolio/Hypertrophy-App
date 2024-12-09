//для language
const setLanguage = (language) => {
	return {
		type: 'SET_LANGUAGE',
		payload: language
	}
}

//для form-data
const setFormData = (name, value) => {
	return {
		type: 'SET_FORM_DATA',
		payload: { name, value }
	}
}

//for session-details:
const addExercise = () => ({
  type: 'ADD_EXERCISE',
});

const addSet = (exerciseId) => ({
  type: 'ADD_SET',
  payload: exerciseId,
});

const changeExercise = (id, name, value) => ({
  type: 'CHANGE_EXERCISE',
  payload: { id, name, value },
});

const changeSet = (setId, exId, name, value) => ({
  type: 'CHANGE_SET',
  payload: { setId, exId, name, value },
});

const deleteSet = (setId, exId) => ({
  type: 'DELETE_SET',
  payload: { setId, exId },
});

const change = (name, value) => ({
  type: 'CHANGE',
  payload: { name, value },
});

//program
const programRequested = () => ({
    type: 'PROGRAM_REQUESTED',
});

const programLoaded = (program) => ({
    type: 'PROGRAM_LOADED',
    payload: program,
});

const programError = (error) => ({
    type: 'PROGRAM_ERROR',
    payload: error,
});

//programs
const programsRequested = () => ({
    type: 'PROGRAMS_REQUESTED',
});

const programsLoaded = (programs) => ({
    type: 'PROGRAMS_LOADED',
    payload: programs,
});

const programsError = (error) => ({
    type: 'PROGRAMS_ERROR',
    payload: error,
});

const fetchProgram = (id) => async (dispatch, getState, { programsService, authService }) => {
    dispatch(programRequested());
    try {
        const program = await programsService.getProgramById(id); // Используй API для получения данных
        dispatch(programLoaded(program));
    } catch (error) {
        dispatch(programError(error.message));
    }
};

const fetchPrograms = () => async (dispatch, getState, { programsService, authService }) => {
    dispatch(programsRequested());
    try {
        const programs = await programsService.getPrograms(); // Используй API для получения данных
        dispatch(programsLoaded(programs));
    } catch (error) {
        dispatch(programsError(error.message));
    }
};

const deleteProgram = (id) => async (dispatch, getState, { programsService, authService }) => {
    try {
        await programsService.deleteProgramById(id); // Удаляем программу
        dispatch(fetchPrograms()); // Перезапрашиваем все программы
    } catch (error) {
        dispatch(programsError(error.message)); // Обработка ошибки
    }
};

const addProgram = (programData) => async (dispatch, getState, { programsService, authService }) => {
    try {
        await programsService.addProgram(programData);
        dispatch(fetchPrograms());
    } catch (error) {
        dispatch(programsError(error.message));
    }
}

const updateProgram = (id, programData) => async (dispatch, getState, { programsService, authService }) => {
    try {
        await programsService.updateProgram(id, programData);
        dispatch(fetchPrograms());
    } catch (error) {
        dispatch(programsError(error.message));
    }
}

//auth

const registerRequested = () => ({
    type: 'REGISTER_REQUESTED',
});

const registerError = (error) => ({
    type: 'REGISTER_ERROR',
    payload: error,
})

const registerSuccess = (message) => ({
    type: 'REGISTER_SUCCESS',
    payload: message,
})

const register = (data) => async (dispatch, getState, { programsService, authService }) => {
    dispatch(registerRequested());
    try {
        const response = await authService.register(data); // Используй API для получения данных
        dispatch(registerSuccess(response.message));
    } catch (error) {
        dispatch(registerError(error.message));
    }
}

const loginRequested = () => ({
    type: 'LOGIN_REQUESTED',
});

const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

const loginError = (error) => ({
    type: 'LOGIN_ERROR',
    payload: error,
});



const login = (data) => async (dispatch, getState, { programsService, authService }) => {
    dispatch(loginRequested());
    try {
        const response = await authService.login(data); // Используй API для получения данных
        dispatch(loginSuccess(response.user));
    } catch (error) {
        dispatch(loginError(error.message));
    }
}

const logoutRequested = () => ({
    type: 'LOGOUT_REQUESTED',
});

const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS',
});

const logoutError = (error) => ({
    type: 'LOGOUT_ERROR',
    payload: error,
});

const logout = () => async (dispatch, getState, { programsService, authService }) => {
    dispatch(logoutRequested());
    try {
        const response = await authService.logout(); // Используй API для получения данных
        dispatch(logoutSuccess(response.user));
    } catch (error) {
        dispatch(logoutError(error.message));
    }
}

export {
	setLanguage,
	setFormData,
	addExercise,
	addSet,
	changeExercise,
	changeSet,
	deleteSet,
	change,
	fetchProgram,
    fetchPrograms,
    deleteProgram,
    addProgram,
    updateProgram,
    loginSuccess,
    logout,
    register,
    login,
};