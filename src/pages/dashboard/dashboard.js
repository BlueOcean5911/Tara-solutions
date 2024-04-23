// material-ui
import { Typography, Grid, Box, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import ActivityEngagedOnCourse from 'sections/dashboard/ActivityEngagedOnCourse';
import AgeAnalytics from 'sections/dashboard/AgeAnalytics';
import AverageAssessmentScore from 'sections/dashboard/AverageAssessmentScore';
import DateRegistrationAnaltics from 'sections/dashboard/PerformanceOnCourse';
import CompletitionRateOnCourse from 'sections/dashboard/CompletitionRateOnCourse';
import GenderAnalytics from 'sections/dashboard/GenderAnalytics';
import FinalResult from 'sections/dashboard/PerformanceAnalytics';
import QualificationAnalytics from 'sections/dashboard/QualificationAnalytics';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    {/* row 1 */}
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <Typography variant="h5">Comprehensive Educational Performance Metrics</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Total Students" count="23,537" extra="Active Users" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Total course" count="7" extra="Active Course" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Assessment Average" count="61" extra="Assessment Average of total course" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Engagement Average" count="276" extra="Engagement Average of total course" />
    </Grid>

    {/* row 2 */}
    <Grid item xs={12} md={2} lg={3} />
    <Grid item xs={12} md={8} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              Predicted Student Performance
            </Typography>
          </Stack>
        </Box>
        <FinalResult series={[2165, 10464, 6789, 6849]} labels={['Distinct', 'Pass', 'Fail', 'Withdrawn']} />
      </MainCard>
    </Grid>
    <Grid item xs={12} md={2} lg={3} />

    {/* row 3 */}
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              Predicted Student Performance on Gender
            </Typography>
          </Stack>
        </Box>
        <GenderAnalytics />
      </MainCard>
    </Grid>
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              Predicted Student Performance on Age
            </Typography>
          </Stack>
        </Box>
        <AgeAnalytics />
      </MainCard>
    </Grid>

    {/* row 4 */}
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              Predicted Student Performance on Course
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
              Predicted Student Performance on Qualification
            </Typography>
          </Stack>
        </Box>
        <QualificationAnalytics />
      </MainCard>
    </Grid>

    {/* row 5 */}
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <Typography variant="h5">Assessment Analytics</Typography>
    </Grid>
    <Grid item xs={12} lg={6}>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              Distribution of average assessment on courses
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
              Activity Engaged on Course
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
              Completition Rate on Course
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
