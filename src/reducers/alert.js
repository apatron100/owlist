import { ALERT_TYPE } from '../actiontypes';

export function alert(state = {}, action) {
  switch (action.type) {
    case ALERT_TYPE.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case ALERT_TYPE.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case ALERT_TYPE.CLEAR:
      return {};
    default:
      return state;
  }
}
