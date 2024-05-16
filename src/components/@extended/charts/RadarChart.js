import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

const chartOption = {
  options: {
    scale: {
      gridLines: {
        color: '#AAA'
      },
      ticks: {
        beginAtZero: false,
        max: 100,
        min: 20,
        stepSize: 10,
        fontColor: '#fff',
        backdropColor: '#444'
      },
      pointLabels: {
        fontSize: 16,
        fontColor: '#11c091'
      }
    },
    chart: {
      height: 350,
      type: 'radar'
    },
    dataLabels: {
      enabled: false,
      name: {
        fontSize: '22px'
      }
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    colors: ['#FF4560'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2
    },
    tooltip: {
      y: {
        formatter: (val) => val
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '12px',
          fontFamily: 'Arial'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val, i) => (i % 2 === 0 ? val : '')
      }
    }
  }
};

const RadarChart = ({ series = [], categories = [], options: extraOptions = {} }) => {
  const [options] = useState({
    ...chartOption.options,
    ...extraOptions,
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          colors: Array.from({ length: categories.length }, () => '#000'),
          fontSize: '14px',
          fontFamily: 'Arial'
        }
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radar" height={400} />
      </div>
    </div>
  );
};

RadarChart.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array,
  options: PropTypes.object
};

export default RadarChart;
