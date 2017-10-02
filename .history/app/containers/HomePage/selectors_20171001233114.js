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
  (homeState) => homeState.get('searchHistory')
);

export {
  selectHome,
  makeSelectSearchHistory,
  makeSelectCurrentSearch,
};
