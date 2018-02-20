import { push } from 'react-router-redux';
import { USER_TYPE } from '../actiontypes';
import { authService } from '../services';
import alertActions from './alert';

export function login(username, password) {
  return dispatch => {
    return dispatch => {
      dispatch(request(USER_TYPE.LOGIN_REQUEST, { username }));

      authService.login(username, password).then(
        user => {
          dispatch(success(USER_TYPE.LOGIN_SUCCESS, user));
          push('/');
        },
        error => {
          dispatch(failure(USER_TYPE.LOGIN_FAILURE, error));
          dispatch(alertActions.error(error));
        }
      );
    };
  };
}

function logout() {
  authService.logout();
  return { type: USER_TYPE.LOGOUT };
}

export function register(user) {
  return dispatch => {
    dispatch(request(user));
    authService.register(USER_TYPE.REGISTER_REQUEST, user).then(
      user => {
        dispatch(success(USER_TYPE.REGISTER_SUCCESS, user));
        push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(USER_TYPE.REGISTER_FAILURE, error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function request(actionType, user) {
  return { type: actionType, user };
}
function success(actionType, user) {
  return { type: actionType, user };
}
function failure(actionType, error) {
  return { type: actionType, error };
}

export default {
  login,
  logout,
  register
};
