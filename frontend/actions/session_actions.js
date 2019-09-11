import * as SessApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


//action creators
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

//errors is an array
const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


//thunk action creators
export const login = (user) => (dispatch) => (
  SessApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
  err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => (dispatch) => (
  SessApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => (dispatch) => (
  SessApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
  err => (dispatch(receiveErrors(err.responseJSON))))
);
