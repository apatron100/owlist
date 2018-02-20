import { ALERT_TYPE } from '../actiontypes';

function success(message) {
  return { type: ALERT_TYPE.SUCCESS, message };
}

function error(message) {
  return { type: ALERT_TYPE.ERROR, message };
}

function clear() {
  return { type: ALERT_TYPE.CLEAR };
}

export default {
  success,
  error,
  clear
};
