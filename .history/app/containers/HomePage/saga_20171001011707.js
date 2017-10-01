/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';

export function* getRepos(action) {
  const url = new URL('https://maps.googleapis.com/maps/api/geocode/json');
  const params = {
    address: action.search,
    key: 'AIzaSyBHY0eA5wa3vmpBSlMYTSp7Il_vylLooUY',
  };
  Object.keys(params).forEach((key, value) => { url.searchParams.append(key, value); });
  console.log(url);
  try {
    const repos = yield call(authApi.register, url);
    console.log(repos);
    yield put(geoFetched(repos));
  } catch (err) {
    console.log(err);
    yield put(geoLoadingError(err));
  }
}

const authApi = {
  register(url) {
    return fetch(url)
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
