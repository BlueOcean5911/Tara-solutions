import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

// ==============================|| MONTHLY BAR CHART ||============================== //

const PerformanceOnCourse = ({
  series = [
    {
      name: 'Distinct',
      data: [23, 627, 348, 289, 270, 217, 391]
    },
    {
      name: 'Pass',
      data: [421, 2963, 985, 1915, 1171, 1895, 1114]
    },
    {
      name: 'Fail',
      data: [89, 1749, 739, 1356, 546, 1584, 726]
    },
    {
      name: 'Withdrawn',
      data: [101, 1391, 1417, 1602, 473, 1641, 224]
    }
  ],
  categories = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG']
}) => {
  // chart options
  const options = {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
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

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type="bar" height={430} />
    </Box>
  );
};

PerformanceOnCourse.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array
};

export default PerformanceOnCourse;
