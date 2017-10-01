/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function TodayWeatherArticle(props) {
  let content = '';
  console.log(props.weather);
  if (props.weather !== false) {
    const weatherJS = props.weather.toJS();
    const temperature = props.weatherJS.temperature;
    const apparentTemperature = props.weatherJS.apparentTemperature;
    const humidity = props.weatherJS.humidity;
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
