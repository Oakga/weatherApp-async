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
    address: '',
    lat: 0,
    lng: 0,
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
        .set('geoLocation', false);
    case FETCH_GEO_SUCCESS:
      const fa = action.locationData.formattedAddress;
      return state
        .set('loading', false)
        .setIn(['geoLocation', 'address'], fa);
        // .setIn(['geoLocation', 'lng'], action.locationData.lng)
        // .setIn(['geoLocation', 'lat'], action.locationData.lat);
    case FETCH_GEO_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
