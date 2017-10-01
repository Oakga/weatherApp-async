/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  FETCH_GEO,
  FETCH_GEO_SUCCESS,
  FETCH_GEO_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  geoLocation: {
    location: false,
    lat: false,
    lng: false,
  },
  weather: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GEO:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['geoLocation', 'repositories'], false);
    case FETCH_GEO_SUCCESS:
      return state
        .setIn(['geoLocation', 'location'], fromJS(action.locationData.lat))
        .set('loading', false);
    case FETCH_GEO_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
