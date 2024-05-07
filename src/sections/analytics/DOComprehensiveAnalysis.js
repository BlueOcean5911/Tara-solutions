import { Box, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { FormattedMessage } from 'react-intl';
import AgeAnalytics from 'sections/dashboard/AgeAnalytics';
import GenderAnalytics from 'sections/dashboard/GenderAnalytics';
import FinalResult from 'sections/dashboard/PerformanceAnalytics';
import PerformanceOnCourse from 'sections/dashboard/PerformanceOnCourse';
import QualificationAnalytics from 'sections/dashboard/QualificationAnalytics';

import PropTypes from 'prop-types';

const AnalysisComponent = ({ data }) => {
  return (
    <>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">
          <FormattedMessage id="compEduPerfMetrics" />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title={<FormattedMessage id="totalStudents" />}
          count={data.total_student}
          extra={<FormattedMessage id="activeUsers" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title={<FormattedMessage id="totalCourse" />}
          count={data.total_course}
          extra={<FormattedMessage id="activeCourse" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title={<FormattedMessage id="assessmentAverage" />}
          count={data.average_score}
          extra={<FormattedMessage id="assessmentAverageDisp" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title={<FormattedMessage id="engagementAverage" />}
          count={data.engagement_average}
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
                <FormattedMessage id="dropOut" />
              </Typography>
            </Stack>
          </Box>
          <FinalResult series={data.predicted_student_performance.series} labels={data.predicted_student_performance.labels} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={2} lg={3} />

      {/* row 3 */}
      <Grid item xs={12} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="predictedDOOnGender" />
              </Typography>
            </Stack>
          </Box>
          <GenderAnalytics series={data.perf_on_gender.series} categories={data.perf_on_gender.categories} />
        </MainCard>
      </Grid>
      <Grid item xs={12} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="predDOOnAge" />
              </Typography>
            </Stack>
          </Box>
          <AgeAnalytics series={data.age_on_course.series} categories={data.age_on_course.categories} />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="predDOOnCourse" />
              </Typography>
            </Stack>
          </Box>
          <PerformanceOnCourse series={data.perf_on_course.series} categories={data.perf_on_course.categories} />
        </MainCard>
      </Grid>
      <Grid item xs={12} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="predDOOnQualification" />
              </Typography>
            </Stack>
          </Box>
          <QualificationAnalytics series={data.perf_on_qualification.series} categories={data.perf_on_qualification.categories} />
        </MainCard>
      </Grid>
    </>
  );
};

AnalysisComponent.propTypes = {
  data: PropTypes.object
};

export default AnalysisComponent;
