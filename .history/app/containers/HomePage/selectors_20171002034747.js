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
  }
);
const makeSelectSearchLocations = () => createSelector(
  selectHome,
  (homeState) => {
    const state = homeState.getIn(['searchHistory', 'location']);
    return state.toJS();
  }
);

const makeSelectSearchDates = () => createSelector(
  selectHome,
  (homeState) => {
    const state = homeState.getIn(['searchHistory', 'dates']);
    return state.toJS();
  }
);


export {
  selectHome,
  makeSelectSearchDates,
  makeSelectSearchHistory,
  makeSelectSearchLocations,
  makeSelectCurrentSearch,
};
