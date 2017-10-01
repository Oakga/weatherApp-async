/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_GEO, FETCH_GEO_SUCCESS } from 'containers/App/constants';
import { geoFetched, geoLoadingError, weatherFetched, weatherLoadingError } from 'containers/App/actions';
import { makeSelectGeoLocationLng, makeSelectGeoLocationLat } from 'containers/App/selectors';

export function* callGeoAPI(action) {
  const params = {
    address: action.search,
    key: 'AIzaSyBHY0eA5wa3vmpBSlMYTSp7Il_vylLooUY',
  };
  const urlString = urlWithParams('https://maps.googleapis.com/maps/api/geocode/json', params);
  try {
    const response = yield call(geoApi.register, urlString);
    yield put(geoFetched(response));
  } catch (err) {
    console.log(err);
    yield put(geoLoadingError(err));
  }
}

export function* callDarkSkyAPI() {
  const key = 'a467fea14c1e42d510075082c4e8013a';
  const lat = yield select(makeSelectGeoLocationLat());
  const lng = yield select(makeSelectGeoLocationLng());
  const params = `${key}/${lat},${lng}`;
  const urlString = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${params}`;
  try {
    const response = yield call(darkSkyiApi.register, urlString);
    yield put(weatherFetched(response));
  } catch (err) {
    console.log(err);
    yield put(weatherLoadingError(err));
  }
}


const geoApi = {
  register(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const address = data.results[0].formatted_address;
      const lat = Math.round(data.results[0].geometry.location.lat * 10000) / 10000;
      const lng = Math.round(data.results[0].geometry.location.lng * 10000) / 10000;
      return {
        address, lat, lng,
      };
    });
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
