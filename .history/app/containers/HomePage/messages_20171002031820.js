/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startTitle: {
    id: 'boilerplate.containers.HomePage.startTitle.header',
    defaultMessage: 'Weather Application',
  },
  searchLocationHeader: {
    id: 'boilerplate.containers.HomePage.searchLocation.header',
    defaultMessage: 'Try me!',
  },
  searchLocationMessage: {
    id: 'boilerplate.containers.HomePage.searchLocation.message',
    defaultMessage: 'Search Location: ',
  },
  searchDateMessage: {
    id: 'boilerplate.containers.HomePage.searchLocation.message',
    defaultMessage: 'on Date: ',
  },
});
