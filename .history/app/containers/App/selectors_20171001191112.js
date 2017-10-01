/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const convertToJS = (state) => (typeof state === 'boolean') ? state : state.toJS();
const selectTodayWeather = (state) => state.getIn(['todayWeather', 'data']);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading'),
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

const makeSelectTodayWeather = () => createSelector(
  selectTodayWeather,
  convertToJS,
);

const makeSelectWeeklyWeather = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['weeklyWeather', 'data'])
);


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectGeoLocationAddress,
  makeSelectGeoLocationLat,
  makeSelectGeoLocationLng,
  makeSelectTodayWeather,
  makeSelectWeeklyWeather,
  makeSelectLocation,
};
