import { combineReducers } from 'redux';
import sessionErrorsReducer from '../session/session_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

//combine reducer function accepts a single argument: an object whose properties will represent properties for our application state, and values that coorespond to domain-specific reducing functions

export default errorsReducer;