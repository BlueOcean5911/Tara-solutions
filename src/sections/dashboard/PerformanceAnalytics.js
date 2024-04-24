import { useEffect, useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import

// chart options
const pieChartOptions = {
  chart: {
    type: 'donut'
  },
  labels: ['Distinct', 'Pass', 'Fail', 'Withdrawn'],
  colors: ['#47d147', '#0099ff', '#ff4d4d', '#660000'],
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

  const [options, setOptions] = useState({...pieChartOptions, labels: labels });

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      {/* <ReactApexChart options={options} series={series} type="bar" height={365} /> */}
      <ReactApexChart options={options} series={series_data} type="donut" />
    </Box>
  );
};

export default FinalResult;
