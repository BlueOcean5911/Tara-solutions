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
  legend: {
    position: 'bottom'
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

// ==============================|| MONTHLY BAR CHART ||============================== //

const PieChart = ({ series = [], labels = [], options: extraOptions = {}, type = 'donut' }) => {
  const [series_data] = useState(series);

  const [options] = useState({ ...pieChartOptions, labels: labels, ...extraOptions });

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type={type} height={400} />
    </Box>
  );
};

PieChart.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array,
  options: PropTypes.object,
  type: PropTypes.string
};

export default PieChart;
