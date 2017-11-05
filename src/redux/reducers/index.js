import { combineReducers } from 'redux';
import todos from './todos';
import auth from './auth';
import websites from './websites';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  auth,
  websites,
  visibilityFilter,
});

export default rootReducer;
