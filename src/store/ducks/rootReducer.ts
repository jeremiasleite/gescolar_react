import { combineReducers } from 'redux';

import repositories from './repositories';
import themes from './themes'

export default combineReducers({
  repositories,
  themes,
});