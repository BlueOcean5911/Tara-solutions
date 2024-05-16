// material-ui
import { Typography, Grid, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormattedMessage } from 'react-intl';
import DOComprehensiveAnalysis from 'sections/analytics/DOComprehensiveAnalysis';

// For props validation
import PropTypes from 'prop-types';

// import drop-out analysis data
import { dropOutAnalysis } from 'analytics-data/drop-out';

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

const DropOutAnalysis = () => {
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
                <Typography variant="h1" color={'grey'} marginY={'1rem'}>
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
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container xs={12} rowSpacing={4.5} columnSpacing={2.75}>
            <DOComprehensiveAnalysis data={dropOutAnalysis} />
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DropOutAnalysis;
