import { combineReducers } from 'redux';
import todos from './todos';
import auth from './auth';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  auth,
  visibilityFilter,
});

export default rootReducer;
