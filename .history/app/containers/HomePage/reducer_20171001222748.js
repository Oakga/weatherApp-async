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
  searchHistory: [],
});

function homeReducer(state = initialState, action) {
  console.log(state);
  const searchHistory = state.searchHistory;
  switch (action.type) {
    case CHANGE_SEARCH:
      if (action.location.trim().length > 0 && !searchHistory.includes(action.location)) {
        searchHistory.push(action.location);
      }
      return state
        .set('searchHistory', fromJS(searchHistory))
        .set('currentSearch', action.location);
    default:
      return state;
  }
}

export default homeReducer;
