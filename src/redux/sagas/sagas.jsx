import { takeLatest, takeEvery, select, put, call } from 'redux-saga/effects';
import {
  addTodo,
  LOGIN_USER,
  completeTodo,
  setVisibilityFilter,
  loginSuccessAction,
  loginFailureAction,
  VisibilityFilters} from '../actions';

function* loginUserAsync() {
  console.log('loginUserAsync')
  yield put(loginFailureAction(Math.random() +''))
}

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_USER, loginUserAsync),
  ];
}
