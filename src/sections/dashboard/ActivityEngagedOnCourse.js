import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';
import { distributionActivityEngaggementOnCourse } from 'analytics-data';

import PropTypes from 'prop-types';

// ==============================|| MONTHLY BAR CHART ||============================== //

const ActivityEngagedOnCourse = ({ series = distributionActivityEngaggementOnCourse }) => {
  // chart options
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 1
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      type: 'numeric'
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (value) {
          return value.toExponential(2);
        }
      }
    }
  };
  const [series_data] = useState(series);   

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type="line" height={430} />
    </Box>
  );
};

ActivityEngagedOnCourse.propTypes = {
  series: PropTypes.array
}

export default ActivityEngagedOnCourse;
