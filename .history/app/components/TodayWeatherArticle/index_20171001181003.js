/**
*
* TodayWeather Article
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function TodayWeatherArticle(props) {
  let content = (<p>--</p>);



  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  );
}

TodayWeatherArticle.propTypes = {
    weatherData 
};

export default TodayWeatherArticle;
