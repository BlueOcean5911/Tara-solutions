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

const CompletitionRateOnCourse = ({
  series = [
    {
      name: 'Completition Rate',
      data: [0.7, 0.53, 0.38, 0.43, 0.59, 0.4, 0.61]
    }
  ],
  categories = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
}) => {
  // chart options
  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val * 100 + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },
    xaxis: {
      categories: categories,
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      min: 0,
      max: 1,
      stepSize: 0.2,
      axisBorder: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val * 100 + '%';
        }
      }
    },
    title: {
      text: '',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  };
  const [seriesData, set] = useState(series);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={seriesData} type="bar" height={350} />
    </Box>
  );
};

export default CompletitionRateOnCourse;
