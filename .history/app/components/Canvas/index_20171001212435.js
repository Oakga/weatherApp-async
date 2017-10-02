/**
*
* Chart canvas
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const Canvas = (props) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Humidity',
        data: props.Data,
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

  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  );
};
Canvas.propTypes = {
  Data: PropTypes.array,
};

export default Canvas;
