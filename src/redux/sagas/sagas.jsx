import { takeLatest, takeEvery, select, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginFailureAction,
} from '../actions';

import {
  PAGE_WEBSITE,
  ADD_WEBSITE,
  DELETE_WEBSITES,
  pageWebsiteSuccess,
  addWebsiteSuccess,
  editWebsiteSuccess,
  deleteWebsitesSuccess,
  pageWebsite,
} from '../actions/website';

import mockData from './mockdata';

const getEntries = state => state.websites;

function* loginUserAsync() {
  console.log('loginUserAsync');
  yield put(loginFailureAction(Math.random() +''));
}

function* getPageWebsitesAsync(action) {
  var p = yield axios.get('/api/v1/memo/page', {
    params : action.filter
  })
  console.log(p.data);
  yield put(pageWebsiteSuccess(p.data));
}

function* addWebsiteAsync(action) {
  console.log(action)
  var p = yield axios.post('/api/v1/memo', action.entity)
  yield put(addWebsiteSuccess(p.data));
}

function* deleteWebsitesAsync(action) {
  console.log(action)
  var p = yield axios.delete('/api/v1/memo', {data: action.ids})
  console.log(p.data)
  yield put(deleteWebsitesSuccess(action.ids));
}

export default function* rootSaga() {
  yield [
    takeLatest(PAGE_WEBSITE, getPageWebsitesAsync),
    takeLatest(ADD_WEBSITE, addWebsiteAsync),
    takeLatest(DELETE_WEBSITES, deleteWebsitesAsync),
  ];
}
