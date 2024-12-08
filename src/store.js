import { applyMiddleware, createStore } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import reducer from './reducers';
import ProgramsService from './services/programs-service';
import AuthService from './services/auth-service';

const programsService = new ProgramsService();
const authService = new AuthService();

const extraArgument = { programsService, authService };

// Применение middleware с дополнительным аргументом
const store = createStore(
  reducer,
  applyMiddleware(withExtraArgument(extraArgument))
);

export default store;