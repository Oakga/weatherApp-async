/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ReposList from 'components/ReposList';
import H2 from 'components/H2';
import { makeSelectGeoLocationAddress, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { fetchGeo } from '../App/actions';
import messages from './messages';
import { changeSearchLocation } from './actions';
import { makeSelectCurrentSearch } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { CenteredSection, Form, Input, Section } from './styles/index';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state search location form is not null, submit the form to call geo location api
   */
  componentDidMount() {
    if (this.props.search && this.props.search.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    // for our case , we will wait for on submit to make a state update since we don't want mutiple state updates of the same type frequently
    const onChange = () => {};

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startTitle} />
            </H2>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.searchLocationHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="search">
                <FormattedMessage {...messages.searchLocationMessage} />
                <Input
                  id="searchLocationInput"
                  type="text"
                  placeholder="Example: New York"
                  value={this.props.search}
                  onChange={onChange}
                />
              </label>
            </Form>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  search: PropTypes.string,
};

HomePage.defaultProps = {
  search: 'New York',
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      const newSearchLocation = document.getElementById('searchLocationInput').value;
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(changeSearchLocation(newSearchLocation));
      dispatch(fetchGeo(newSearchLocation));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectGeoLocation(),
  currentSearch: makeSelectCurrentSearch(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
