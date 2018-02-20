import { push } from 'react-router-redux';
import { USER_TYPE } from '../actiontypes';

function signUpError(message) {
  return {
    type: USER_TYPE.SIGNUP_ERROR_USER,
    message
  };
}

function beginSignUp() {
  return { type: USER_TYPE.SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: USER_TYPE.SIGNUP_SUCCESS_USER,
    message
  };
}

function beginLogout() {
  return { type: USER_TYPE.LOGOUT_USER };
}

function logoutSuccess() {
  return { type: USER_TYPE.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: USER_TYPE.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: USER_TYPE.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return dispatch => {
    // dispatch(beginLogin());
    // return authService()
    //   .login(data)
    //   .then(response => {
    //     dispatch(loginSuccess('You have been successfully logged in'));
    //     dispatch(push('/'));
    //   })
    //   .catch(err => {
    //     dispatch(loginError('Oops! Invalid username or password'));
    //   });
  };
}

export function signUp(data) {
  return dispatch => {
    dispatch(beginSignUp());

    // return authService()
    //   .signUp(data)
    //   .then(response => {
    //     dispatch(signUpSuccess('You have successfully registered an account!'));
    //     dispatch(push('/'));
    //   })
    //   .catch(err => {
    //     dispatch(signUpError('Oops! Something went wrong when signing up'));
    //   });
  };
}

export function logOut() {
  return dispatch => {
    dispatch(beginLogout());

    // return authService()
    //   .logOut()
    //   .then(response => {
    //     dispatch(logoutSuccess());
    //   })
    //   .catch(err => {
    //     dispatch(logoutError());
    //   });
  };
}
