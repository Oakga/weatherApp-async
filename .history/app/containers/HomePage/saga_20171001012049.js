/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';

export function* getRepos(action) {
  const params = {
    address: action.search,
    key: 'AIzaSyBHY0eA5wa3vmpBSlMYTSp7Il_vylLooUY',
  };
  const urlString = urlWithParams('https://maps.googleapis.com/maps/api/geocode/json', params);
  try {
    const repos = yield call(authApi.register, urlString);
    console.log(repos);
    yield put(geoFetched(repos));
  } catch (err) {
    console.log(err);
    yield put(geoLoadingError(err));
  }
}

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
  // Watches for FETCH_GEO actions and calls getRepos when one comes in.
  yield takeLatest(FETCH_GEO, getRepos);
}
