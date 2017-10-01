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

const makeSelectGeoLocationAddress = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['geoLocation', 'location'])
);

const makeSelectGeoLocationLat = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['geoLocation', 'lat'])
);

const makeSelectGeoLocationLng = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['geoLocation', 'lng'])
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
  makeSelectLoading,
  makeSelectError,
  makeSelectGeoLocation,
  makeSelectWeather,
  makeSelectLocation,
};
