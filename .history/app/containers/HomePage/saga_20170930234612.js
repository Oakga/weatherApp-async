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
export function* getRepos() {
  // Select location from store
  const searchLocation = yield select(makeSelectCurrentSearch());

  const requestURL = `https://api.github.com/users/${searchLocation}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(geoFetched(repos));
  } catch (err) {
    yield put(geoLoadingError(err));
  }
}

const authApi = {
  register(userData) {
    fetch('http://localhost/api/auth/local/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    })
    .then(statusHelper)
    .then((response) => response.json())
    .catch((error) => error)
    .then((data) => {
      console.log(data); // The data does log!
      return data;
    });
  },
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
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_GEO, getRepos);
}
