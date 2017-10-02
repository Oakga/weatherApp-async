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

import H2 from 'components/H2';
import Chart from 'chart.js';
import History from 'components/History';
import TodayWeatherArticle from 'components/TodayWeatherArticle';
import { makeSelectTodayWeather, makeSelectGeoLocationAddress, makeSelectLoading, makeSelectError, makeSelectWeeklyWeatherFilteredData, makeSelectWeeklyWeatherFilteredLabel } from 'containers/App/selectors';
import { fetchGeo } from '../App/actions';
import messages from './messages';
import { changeSearchLocation } from './actions';
import { makeSelectCurrentSearch, makeSelectSearchHistory } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { CenteredSection, Form, Input, Section } from './styles/index';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state search location form is not null, submit the form to call geo location api
   */
  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps.filteredData, nextProps.label);
  }

  updateChart(Data, Label) {
    const chartElement = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(chartElement, {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: Label,
          data: Data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 22, 13, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }

  render() {
    const { location, todayWeather,history } = this.props;
    // for our case , we will wait for on submit to make a state update since we don't want mutiple state updates of the same type frequently
    const onChange = () => {};
    console.log(history);
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
                  onChange={onChange}
                />
              </label>
            </Form>
            <TodayWeatherArticle location={location} weather={todayWeather} />
          </Section>
          <Section>
          </Section>
          <Section>
            <canvas id="myChart" width="400" height="400"></canvas>
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
  todayWeather: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  filteredData: PropTypes.array,
  onSubmitForm: PropTypes.func,
  search: PropTypes.string,
  label: PropTypes.string,
  history: PropTypes.array,
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
  location: makeSelectGeoLocationAddress(),
  currentSearch: makeSelectCurrentSearch(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  todayWeather: makeSelectTodayWeather(),
  filteredData: makeSelectWeeklyWeatherFilteredData(),
  label: makeSelectWeeklyWeatherFilteredLabel(),
  history: makeSelectSearchHistory(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
