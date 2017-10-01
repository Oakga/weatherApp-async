/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectCurrentSearch } from 'containers/HomePage/selectors';
/**
 * Github repos request/response handler
 */
export function* getRepos(action) {
  // Select location from store
  try {
    // Call our request helper (see 'utils/request')
    console.log(action.search);
    const repos = yield call(authApi,action.search);
    yield put(geoFetched(repos));
  } catch (err) {
    yield put(geoLoadingError(err));
  }
}

const authApi = (location) => {
  console.log(location);
  return fetch('https://maps.googleapis.com/maps/api/geocode/json', {
    method: 'GET',
    params: {
      address: location,
      key: 'AIzaSyAkYBjwd7ygcP8GpAz47QsP3s3vaweLAE0',
    },
  })
    .then(statusHelper)
    .then((response) => response.json())
    .catch((error) => error)
    .then((data) => {
      console.log(data);
      return data;
    });
};

const statusHelper = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};
/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watches for FETCH_GEO actions and calls getRepos when one comes in.
  yield takeLatest(FETCH_GEO, getRepos);
}
