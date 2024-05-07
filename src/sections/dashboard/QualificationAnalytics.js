import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import { qualificationsAnalytics } from 'analytics-data';

import PropTypes from 'prop-types';

// ==============================|| MONTHLY BAR CHART ||============================== //

const QualificationAnalytics = ({ series = qualificationsAnalytics, categories = ['Distinct', 'Pass', 'Fail', 'Withdrawn'] }) => {
  const [series_data] = useState(series);
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

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type="bar" height={430} />
    </Box>
  );
};

QualificationAnalytics.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array
}

export default QualificationAnalytics;
