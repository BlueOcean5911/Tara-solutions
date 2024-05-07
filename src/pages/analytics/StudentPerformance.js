// material-ui
import { Typography, Grid, Box, Tabs, Tab } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import UploadFiles from 'components/upload/upload';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import AnalysisComponent from 'sections/analytics/StudentPerformanceComprehensiveAnalysis';
import { DotChartOutlined, UserOutlined } from '@ant-design/icons';
import { TabContext, TabPanel } from '@mui/lab';
import StudentPerformanceSegmentedAnalysis from 'sections/analytics/StudentPerformanceSegmentedAnalysis';

// ==============================|| SAMPLE PAGE ||============================== //

function a11yProps(index) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`
  };
}

const ComprehensiveAnalysis = () => {
  const [analysisData, setAnalysisData] = useState({});
  const [studentData, setStudentData] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* overview */}
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container xs={12} lg={12}>
            <Grid item xs={12} lg={6}>
              <img src="/asset/image/analytics-002.jpg" alt="Analytics" style={{ width: '100%', height: '100%', minHeight: '300px' }} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                width={'100%'}
                height={'100%'}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', paddingX: { md: '2rem' } }}
              >
                <Typography variant="h2" color={'grey'} marginY={'1rem'}>
                  <FormattedMessage id="studentPerformanceAnalysis" />
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1rem' } }} color={'black'}>
                  <FormattedMessage id="studentPerformanceDisp" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <UploadFiles setAnalysisData={setAnalysisData} setStudentData={setStudentData} />
      </Grid>

      <Grid item xs={12} lg={12}>
        {Object.keys(analysisData).length > 0 && (
          <TabContext value={value}>
            <Box margin={2}>
              <Tabs value={value} onChange={handleChange} aria-label="student performance tabs">
                <Tab label="Comprehensive Analysis" icon={<DotChartOutlined />} iconPosition="start" {...a11yProps(0)} />
                <Tab label="Segmented analysis" icon={<UserOutlined />} iconPosition="start" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={0}>
              <Grid container xs={12} rowSpacing={4.5} columnSpacing={2.75}>
                <AnalysisComponent data={analysisData} />
              </Grid>
            </TabPanel>
            <TabPanel value={1}>
              <Grid container xs={12} rowSpacing={4.5} columnSpacing={2.75}>
                <StudentPerformanceSegmentedAnalysis studentData={studentData} />
              </Grid>
            </TabPanel>
          </TabContext>
        )}
      </Grid>
    </Grid>
  );
};

export default ComprehensiveAnalysis;
