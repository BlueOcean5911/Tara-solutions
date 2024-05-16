import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

const chartOption = {
  options: {
    chart: {
      type: 'radialBar'
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: () => 249
          }
        }
      }
    }
  }
};

const RadialbarChart = ({ series = [], labels = [], options: extraOptions = {} }) => {
  const [options] = useState({ ...chartOption.options, labels: labels, ...extraOptions });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} labels={labels} type="radialBar" height={400}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

RadialbarChart.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array,
  options: PropTypes.object
};

export default RadialbarChart;
