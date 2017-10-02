/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../H2';

function TodayWeatherArticle(props) {
  let content = '';
  if (props.weather !== false) {
    const temperature = props.weather.temperature;
    const apparentTemperature = props.weather.apparentTemperature;
    const humidity = props.weather.humidity;
    content = `Today temperature is ${temperature} but feels like ${apparentTemperature} and the humdity is ${humidity}`;
  }
  return (
    <div>
      {props.weather ? <H2>Today Weather</H2> : '' }
      <p>
        {content}
      </p>
    </div>
  );
}

TodayWeatherArticle.propTypes = {
  weather: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default TodayWeatherArticle;
