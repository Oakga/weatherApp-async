/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentSearch = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentSearch')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectGeoLocation = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['location', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentSearch,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
