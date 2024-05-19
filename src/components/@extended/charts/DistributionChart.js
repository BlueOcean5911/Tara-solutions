import { Box } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const chartOptions = {
  chart: {
    height: 350,
    type: 'bar'
  },
  colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  yaxis: {
    min: 0,
    max: 100,
    stepSize: 20
  },
  xaxis: {
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  }
};

const DistributionChart = ({ series = [], categories = [], options: extraOptions = {} }) => {
  const [options] = useState({ ...chartOptions, ...extraOptions, xaxis: { categories: categories } });

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series} height={400} type="bar" />
    </Box>
  );
};

DistributionChart.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array,
  options: PropTypes.object
};

export default DistributionChart;
