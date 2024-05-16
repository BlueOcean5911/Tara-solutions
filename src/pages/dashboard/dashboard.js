// material-ui
import { Typography, Grid, Box, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import ActivityEngagedOnCourse from 'sections/dashboard/ActivityEngagedOnCourse';
import AverageAssessmentScore from 'sections/dashboard/AverageAssessmentScore';
import DateRegistrationAnaltics from 'sections/dashboard/PerformanceOnCourse';
import CompletitionRateOnCourse from 'sections/dashboard/CompletitionRateOnCourse';
import GenderAnalytics from 'sections/dashboard/GenderAnalytics';
import FinalResult from 'sections/dashboard/PerformanceAnalytics';
import QualificationAnalytics from 'sections/dashboard/QualificationAnalytics';
import { FormattedMessage } from 'react-intl';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    {/* row 1 */}
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <Typography variant="h5">
        <FormattedMessage id="dashboardTitle1" />
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title={<FormattedMessage id="totalStudents" />} count="23,537" extra={<FormattedMessage id="activeUsers" />} />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title={<FormattedMessage id="totalCourse" />} count="7" extra={<FormattedMessage id="activeCourse" />} />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce
        title={<FormattedMessage id="assessmentAverage" />}
        count="61"
        extra={<FormattedMessage id="assessmentAverageDisp" />}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce
        title={<FormattedMessage id="engagementAverage" />}
        count="276"
        extra={<FormattedMessage id="engagementAverageDisp" />}
      />
    </Grid>

    {/* row 2 */}
    <Grid item xs={12} md={2} lg={3} />
    <Grid item xs={12} md={8} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="predictedStudentPerformance" />
            </Typography>
          </Stack>
        </Box>
        <FinalResult series={[2165, 10464, 6789, 6849]} labels={['Distinct', 'Pass', 'Withdrawn', 'Fail']} />
      </MainCard>
    </Grid>
    <Grid item xs={12} md={2} lg={3} />

    {/* row 3 */}
    <Grid item xs={12} lg={3} />
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="predictedStuPerfOnGender" />
            </Typography>
          </Stack>
        </Box>
        <GenderAnalytics />
      </MainCard>
    </Grid>
    <Grid item xs={12} lg={3} />
    {/* <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="predStuPerfOnAge" />
            </Typography>
          </Stack>
        </Box>
        <AgeAnalytics />
      </MainCard>
    </Grid> */}

    {/* row 4 */}
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="predStuPerfOnCourse" />
            </Typography>
          </Stack>
        </Box>
        <DateRegistrationAnaltics />
      </MainCard>
    </Grid>
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="predStuPerfOnQualification" />
            </Typography>
          </Stack>
        </Box>
        <QualificationAnalytics />
      </MainCard>
    </Grid>

    {/* row 5 */}
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <Typography variant="h5">
        <FormattedMessage id="assessmentAnalytics" />
      </Typography>
    </Grid>
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="distOfAveAssessOnCourse" />
            </Typography>
          </Stack>
        </Box>
        <AverageAssessmentScore />
      </MainCard>
    </Grid>
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="activityEngagedOnCourse" />
            </Typography>
          </Stack>
        </Box>
        <ActivityEngagedOnCourse />
      </MainCard>
    </Grid>

    {/* row 6 */}
    <Grid item xs={12} lg={3} />
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              <FormattedMessage id="completedRateOnCourse" />
            </Typography>
          </Stack>
        </Box>
        <CompletitionRateOnCourse />
      </MainCard>
    </Grid>
    <Grid item xs={12} lg={3} />
  </Grid>
);

export default Dashboard;
