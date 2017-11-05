export const ADD_TODO = 'ADD_TODO';
export const LOGIN_USER = 'LOGIN_USER';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export function loginAction(user) {
  return {
    type: LOGIN_USER,
    data: user,
  };
}

export function loginSuccessAction(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    data: token,
  };
}

export function loginFailureAction(error) {
  return {
    type: LOGIN_USER_FAILURE,
    data: error,
  };
}
