/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO } from 'containers/App/constants';
import { geoFetched, geoLoadingError } from 'containers/App/actions';

export function* getRepos(action) {
  try {
    const repos = yield call(authApi.register, action.search);
    yield put(geoFetched(repos));
  } catch (err) {
    yield put(geoLoadingError(err));
  }
}

const authApi = {
  register(location) {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json', {
      method: 'GET',
      params: {
        address: location,
        key: 'AIzaSyAkYBjwd7ygcP8GpAz47QsP3s3vaweLAE0',
      },
    })
    .then((response) => response.json())
    .catch((error) => error)
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
