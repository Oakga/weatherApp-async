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
  const searchHistory = state.searchHistory;
  const oldSearch = state.currentSearch;
  switch (action.type) {
    case CHANGE_SEARCH:
    // for the first time search i.e if currentSearch is null or if the search already been done ,don't put the old search in history for the new search
      if (oldSearch.trim().length > 0 || !searchHistory.includes(action.location)) {
        searchHistory.push(oldSearch);
      }
      return state
        .set('searchHistory'),searchHistory),
        .set('currentSearch', action.location);
    default:
      return state;
  }
}

export default homeReducer;
