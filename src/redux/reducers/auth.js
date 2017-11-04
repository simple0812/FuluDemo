import Immutable from 'immutable';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions';


const initialState = Immutable.fromJS({
  token: null,
  error: null,
  user: null,
});

function auth(state = initialState, action = {}) {
  switch (action.type) {
  case LOGIN_USER_SUCCESS:
    return state.merge({
      token: action.data,
      error: null,
    });
  case LOGIN_USER_FAILURE:
    return state.merge({
      token: null,
      error: action.data,
    });
  default:
    return state;
  }
};


export default auth;
