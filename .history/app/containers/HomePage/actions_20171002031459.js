/*
 * Home Actions
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
  CHANGE_SEARCH,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} location The new text of the location input field
 * @param  {string} date The new text of the date input field
 *
 * @return {object}    An action object with a type of CHANGE_SEARCH
 */
export function changeSearchLocation(location,date) {
  return {
    type: CHANGE_SEARCH,
    location,
    date,
  };
}
