/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';

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
      <h1>Today Weather</h1>
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
