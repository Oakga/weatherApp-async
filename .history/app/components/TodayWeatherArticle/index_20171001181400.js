/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function TodayWeatherArticle(props) {
  const temperature = props.WeatherData.temperature;
  const apparentTemperature = props.WeatherData.apparentTemperature;
  const humidity = props.WeatherData.humidity;
  const content = `Today temperature is ${temperature} but feels like ${apparentTemperature} and the humdity is ${humidity}`;

  return (
    <p>
      {content}
    </p>
  );
}

TodayWeatherArticle.propTypes = {
  WeatherData: PropTypes.object,
};

export default TodayWeatherArticle;
