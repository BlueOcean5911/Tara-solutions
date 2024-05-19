import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

const chartOption = {
  chart: {
    type: 'polarArea'
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};
const PolarChart = ({ series = [], labels = [], options: extraOptions = {} }) => {
  const [options] = useState({ ...chartOption, labels: labels, ...extraOptions });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="polarArea" height={440} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

PolarChart.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array,
  options: PropTypes.object
};

export default PolarChart;
