import { USER_TYPE } from '../actiontypes';

export function users(state = {}, action) {
  switch (action.type) {
    case USER_TYPE.GETALL_REQUEST:
      return {
        loading: true
      };
    case USER_TYPE.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case USER_TYPE.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
