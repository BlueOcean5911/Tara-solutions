import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// ==============================|| MONTHLY BAR CHART ||============================== //

const AgeAnalytics = ({
  series = [
    {
      name: '50>=',
      data: [23, 29, 64, 34]
    },
    {
      name: '35-50',
      data: [742, 3013, 1689, 1834]
    },
    {
      name: '0-35',
      data: [1400, 7387, 5071, 4981]
    }
  ],
  categories = ['Distinct', 'Pass', 'Fail', 'Withdrawn']
}) => {
  // chart options
  const barChartOptions = {
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

  const [options, setOptions] = useState(barChartOptions);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series_data} type="bar" height={430} />
    </Box>
  );
};

export default AgeAnalytics;
