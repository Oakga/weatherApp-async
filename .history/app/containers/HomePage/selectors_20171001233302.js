/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCurrentSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentSearch')
);

const makeSelectSearchHistory = () => createSelector(
  selectHome,
  (homeState) => {
    const state = homeState.get('searchHistory');
    return state.toJS();
  }
);

export {
  selectHome,
  makeSelectSearchHistory,
  makeSelectCurrentSearch,
};
