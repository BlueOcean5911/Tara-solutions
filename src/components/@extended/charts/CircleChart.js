import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

const chartOption = {
  options: {
    chart: {
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          margin: 8,
          fontSize: '12px',
          formatter: (seriesName, opts) => `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  }
}

const CircleChart = ({ series = [], labels = [], options: extraOptions = {} }) => {
  const [options] = useState({ ...chartOption.options, labels: labels, ...extraOptions });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

CircleChart.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array,
  options: PropTypes.object
};

export default CircleChart;
