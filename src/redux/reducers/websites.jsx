import Immutable from 'immutable';
import _ from 'lodash';
import {
  ADD_WEBSITE,
  EDIT_WEBSITE,
  PAGE_WEBSITE,
  ADD_WEBSITE_SUCCESS,
  EDIT_WEBSITE_SUCCESS,
  PAGE_WEBSITE_SUCCESS,
  DELETE_WEBSITES_SUCCESS,
} from '../actions/website';

const initialState = Immutable.fromJS({
  code: 'error',
  message: '',
  result: [],
  total : 0,
});

function websites(state = initialState, action={}) {
  switch (action.type) {
  case ADD_WEBSITE_SUCCESS:
    var p = state.toJSON();
    p.result.unshift(action.data.result);
    return Immutable.fromJS(p);

  case DELETE_WEBSITES_SUCCESS:
    var p = state.toJSON();
    _.remove(p.result, (each) => action.data.indexOf(each.id) >= 0);
    return Immutable.fromJS(p);

  case EDIT_WEBSITE_SUCCESS:
    var p = state.toJSON();
    var x = _.find(p.result, each => each.id === action.data.id);
    x.description = action.data.description;
    x.link = action.data.link;
    return Immutable.fromJS(p);
  case PAGE_WEBSITE_SUCCESS:
    return state.merge(action.data);
    // return action.data;
  default:
    return state;
  }
}

export default websites;
