/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_GEO,
  FETCH_GEO_SUCCESS,
  FETCH_GEO_ERROR,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
* @param  {string} search The new text of the date input field
* @param  {number} date The new date of the date input field
 * @return {object} An action object with a type of FETCH_GEO
 */
export function fetchGeo(search,date) {
  return {
    type: FETCH_GEO,
    search,
    date,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} location The repository data
 * @return {object} An action object with a type of FETCH_GEO_SUCCESS loading the geo location
 */
export function geoFetched(locationData) {
  return {
    type: FETCH_GEO_SUCCESS,
    locationData,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of FETCH_GEO_ERROR
 */
export function geoLoadingError(error) {
  return {
    type: FETCH_GEO_ERROR,
    error,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} weatherData The weather data
 * @return {object} An action object with a type of FETCH_GEO_SUCCESS loading the geo location
 */
export function weatherFetched(weatherData) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    weatherData,
  };
}


/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of FETCH_GEO_ERROR
 */
export function weatherLoadingError(error) {
  return {
    type: FETCH_WEATHER_ERROR,
    error,
  };
}
