import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

import PropTypes from 'prop-types';

// chart options
const pieChartOptions = {
  chart: {
    type: 'donut'
  },
  // colors: ['#2ecc71', '#b03060', '#00b7eb', '#ff6b6b'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const FinalResult = ({ series = [44, 55, 41, 17], labels = ['Distinct', 'Pass', 'Fail', 'Withdrawn'] }) => {
  const [series_data] = useState(series);

  const [options] = useState({ ...pieChartOptions, labels: labels });

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      {/* <ReactApexChart options={options} series={series} type="bar" height={365} /> */}
      <ReactApexChart options={options} series={series_data} type="donut" />
    </Box>
  );
};

FinalResult.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array
};

export default FinalResult;
