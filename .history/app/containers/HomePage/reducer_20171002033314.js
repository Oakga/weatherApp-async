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
  searchHistory: [],
  searchDates: [],
});

function homeReducer(state = initialState, action) {
  const searchHistory = state.toJS().searchHistory;
  const searchDates = state.toJS().searchDates;
  switch (action.type) {
    case CHANGE_SEARCH:
    // keep the history and limit of 5 without null locations
      if (action.location.trim().length > 0) {
        searchHistory.push(action.location);
        searchDates.push(action.date);
        if (searchHistory.length > 5) searchHistory.shift();
        if (searchDates.length > 5) searchDates.shift();
      }
      return state
        .set('searchHistory', fromJS(searchHistory))
        .set('searchDates', fromJS(searchDates))
        .set('currentSearch', action.location);
    default:
      return state;
  }
}

export default homeReducer;
