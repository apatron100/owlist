import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './user';
import { alert } from './alert';
import { notification } from './notification';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  notification
});

export default rootReducer;
