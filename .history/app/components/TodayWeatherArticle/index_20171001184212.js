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
    console.log(props.weather);
    const temperature = props.weather.temperature;
    const apparentTemperature = props.weather.data.apparentTemperature;
    const humidity = props.weather.data.humidity;
    content = `Today temperature is ${temperature} but feels like ${apparentTemperature} and the humdity is ${humidity}`;
  }
  return (
    <p>
      {content}
    </p>
  );
}

TodayWeatherArticle.propTypes = {
  weather: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default TodayWeatherArticle;
