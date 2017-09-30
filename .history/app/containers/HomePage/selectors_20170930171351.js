/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCurrentSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentSearch')
);

export {
  selectHome,
  makeSelectCurrentSearch,
};
