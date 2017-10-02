/*
 * HomeReducer
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
  CHANGE_SEARCH,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentSearch: '',
  currentDate: '',
  searchHistory: {
    locations: [],
    dates: [],
  },
});

function homeReducer(state = initialState, action) {
  const searchLocation = state.toJS().searchHistory.locations;
  const searchDates = state.toJS().searchHistory.dates;
  switch (action.type) {
    case CHANGE_SEARCH:
    // keep the history and limit of 5 without null locations
      if (action.location.trim().length > 0) {
        searchLocation.push(action.location);
        searchDates.push(action.date);
        if (searchLocation.length > 5) searchLocation.shift();
        if (searchDates.length > 5) searchDates.shift();
      }
      return state
      .setIn(['searchHistory', 'locations'], fromJS(searchLocation))
      .setIn(['searchHistory', 'dates'], fromJS(searchDates))
        .set('currentSearch', action.location);
    default:
      return state;
  }
}

export default homeReducer;
