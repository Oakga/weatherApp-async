/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';
import request from 'utils/request';

export function* getRepos(action) {
  const fetchConfig = {
    method: 'GET',
    uri: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
      address: action.search,
      key: 'AIzaSyAkYBjwd7ygcP8GpAz47QsP3s3vaweLAE0',
    },
  };
  try {
    const repos = yield call(authApi, fetchConfig);
    console.log(repos);
    yield put(geoFetched(repos));
  } catch (err) {
    console.log(err);
    yield put(geoLoadingError(err));
  }
}

const authApi = {
  register(config) {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json', config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  },
};
/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watches for FETCH_GEO actions and calls getRepos when one comes in.
  yield takeLatest(FETCH_GEO, getRepos);
}
