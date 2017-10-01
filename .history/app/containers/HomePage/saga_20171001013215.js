/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO, FETCH_GEO_SUCCESS } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';

export function* callGeoAPI(action) {
  const params = {
    address: action.search,
    key: 'AIzaSyBHY0eA5wa3vmpBSlMYTSp7Il_vylLooUY',
  };
  const urlString = urlWithParams('https://maps.googleapis.com/maps/api/geocode/json', params);
  try {
    const response = yield call(authApi.register, urlString);
    console.log(response);
    yield put(geoFetched(response));
  } catch (err) {
    console.log(err);
    yield put(geoLoadingError(err));
  }
}

export function* callDarkSkyAPI() {
  console.log("calling dark sky api");
}

const authApi = {
  register(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  },
};

const urlWithParams = (urlString, params = {}) => {
  const url = new URL(urlString);
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    searchParams.append(key, params[key]);
  });
  url.search = searchParams.toString();
  return url.toString();
};


/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watchers 
  yield takeLatest(FETCH_GEO, callGeoAPI);
  yield takeLatest(FETCH_GEO_SUCCESS, callDarkSkyAPI);
}
