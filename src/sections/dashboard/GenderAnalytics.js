import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

// ==============================|| MONTHLY BAR CHART ||============================== //

const GenderAnalytics = ({
  series = [
    {
      name: 'Male',
      data: [1036, 5322, 3765, 3941]
    },
    {
      name: 'Female',
      data: [1129, 5142, 3024, 2908]
    }
  ],
  categories = ['Distinct', 'Pass', 'Fail', 'Withdrawn']
}) => {
  // chart options
  const pieChartOptions = {
    chart: {
      type: 'bar',
      height: 430
    },
    labels: ['Distinct', 'Pass', 'Fail', 'Withdrawn'],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: categories
    }
  };

  const [series_data] = useState(series);

  const [options] = useState(pieChartOptions);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type="bar" height={430} />
    </Box>
  );
};

GenderAnalytics.propTypes = {
  series: PropTypes.object,
  categories: PropTypes.array
};

export default GenderAnalytics;
