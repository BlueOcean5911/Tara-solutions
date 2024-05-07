import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ApexChart = ({ value }) => {
  const [state, setState] = useState({
    series: [100, value],
    options: {
      chart: {
        type: 'radialBar',
        height: 'auto'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%'
          },
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 0,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: true,
              offsetY: -40
            },
            value: {
              fontSize: '44px',
              offsetY: -10
            },
            total: {
              show: true,
              label: 'Risk',
              color: '#373d3f',
              fontSize: '16px',
              fontWeight: 600,
              formatter: function (w) {
                return w.globals.seriesTotals[1] + '%';
              }
            }
          }
        }
      },
      fill: {
        type: ['gradient', 'solid'],
        colors: [
          function ({ value, seriesIndex, w }) {
            if (value < 30) {
              return '#4caf50';
            } else if (value >= 30 && value < 69) {
              return '#FFEB3B';
            } else {
              return '#ff5252';
            }
          }
        ],
        gradient: {
          type: 'radial',

          colorStops: [
            {
              offset: 29,
              color: '#4caf50'
            },
            {
              offset: [30],
              color: '#FFEB3B'
            },
            {
              offset: [69],
              color: '#FFEB3B'
            },
            {
              offset: [70],
              color: '#ff5252'
            }
          ]
        }
      },
      stroke: {
        lineCap: 'round'
      } ,
      labels : ['Risk', 'Risk']
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="radialBar" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

ApexChart.propTypes = {
  value: PropTypes.number
};

export default ApexChart;
