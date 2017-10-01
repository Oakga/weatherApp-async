/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function TodayWeatherArticle(props) {
  const temperature = props.weather.temperature;
  const apparentTemperature = props.weather.apparentTemperature;
  const humidity = props.weather.humidity;
  const content = `Today temperature is ${temperature} but feels like ${apparentTemperature} and the humdity is ${humidity}`;

  return (
    <p>
      {content}
    </p>
  );
}

TodayWeatherArticle.propTypes = {
  weather: PropTypes.object,
};

export default TodayWeatherArticle;
