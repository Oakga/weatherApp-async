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
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_GEO
 */
export function fetchGeo() {
  return {
    type: FETCH_GEO,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} location The repository data
 * @param  {string} search the search data
 * @return {object} An action object with a type of FETCH_GEO_SUCCESS loading the geo location
 */
export function geoFetched(search, location) {
  return {
    type: FETCH_GEO_SUCCESS,
    search,
    location,
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
