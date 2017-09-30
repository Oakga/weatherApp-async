/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

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
  (globalState) => globalState.getIn(['geoLocation', 'repositories'])
);

const makeSelectWeather = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['weather', 'repositories'])
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
  makeSelectGeoLocation,
  makeSelectWeather,
  makeSelectLocation,
};
