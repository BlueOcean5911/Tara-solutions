// material-ui
import { Typography, Grid, Box, Tabs, Tab } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import UploadFiles from 'components/upload/upload';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import DOComprehensiveAnalysis from 'sections/analytics/DOComprehensiveAnalysis';
import { DotChartOutlined, UserOutlined } from '@ant-design/icons';
import StudentPerformanceSegmentedAnalysis from 'sections/analytics/DOSegmentedAnalysis';

import PropTypes from 'prop-types';

// ==============================|| SAMPLE PAGE ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const DropOutAnalysis = () => {
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
              <img
                src="/assets/images/analytics/analytics002.png"
                alt="Analytics"
                style={{ width: '100%', height: '100%', minHeight: '300px', borderRadius: '1rem', opacity: '0.7' }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                width={'100%'}
                height={'100%'}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', paddingX: { md: '2rem' } }}
              >
                <Typography variant="h2" color={'grey'} marginY={'1rem'}>
                  <FormattedMessage id="dropOutAnalysisTitle" />
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1rem' } }} color={'black'}>
                  <FormattedMessage id="dropOutAnalysisDisp" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <UploadFiles setAnalysisData={setAnalysisData} setStudentData={setStudentData} type="drop-out-analysis" />
      </Grid>

      <Grid item xs={12} lg={12}>
        {Object.keys(analysisData).length > 0 && (
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="student performance tabs">
                <Tab
                  label={<FormattedMessage id="comprehensiveAnalysis" />}
                  icon={<DotChartOutlined />}
                  iconPosition="start"
                  {...a11yProps(0)}
                />
                <Tab label={<FormattedMessage id="segmentedAnalysis" />} icon={<UserOutlined />} iconPosition="start" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container xs={12} rowSpacing={4.5} columnSpacing={2.75}>
                <DOComprehensiveAnalysis data={analysisData} />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container xs={12} rowSpacing={4.5} columnSpacing={2.75}>
                <StudentPerformanceSegmentedAnalysis studentData={studentData} />
              </Grid>
            </TabPanel>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default DropOutAnalysis;
