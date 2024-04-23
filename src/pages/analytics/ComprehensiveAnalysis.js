// material-ui
import { Typography, Grid, Box, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import ActivityEngagedOnCourse from 'sections/dashboard/ActivityEngagedOnCourse';
import AgeAnalytics from 'sections/dashboard/AgeAnalytics';
import AverageAssessmentScore from 'sections/dashboard/AverageAssessmentScore';
import PerformanceOnCourse from 'sections/dashboard/PerformanceOnCourse';
import CompletitionRateOnCourse from 'sections/dashboard/CompletitionRateOnCourse';
import GenderAnalytics from 'sections/dashboard/GenderAnalytics';
import FinalResult from 'sections/dashboard/PerformanceAnalytics';
import QualificationAnalytics from 'sections/dashboard/QualificationAnalytics';
import UploadFiles from 'components/upload/upload';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const ComprehensiveAnalysis = () => {
  const [data, setData] = useState({});

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
                  Comprehensive LMS analytics
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1rem' } }} color={'black'}>
                  Obtaining comprehensive analytics about student performance, assessment scores, and course data unlocks a wealth of
                  insights that can be leveraged to significantly improve student outcomes. By analyzing this data effectively, educators
                  can identify areas for improvement, personalize learning experiences, and ultimately foster a more successful learning
                  environment for all students.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <UploadFiles setData={setData} />
      </Grid>
      {Object.keys(data).length > 0 && (
        <>
          {/* row 1 */}
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Comprehensive Educational Performance Metrics</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total Students" count={data.total_student} extra="Active Users" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total course" count={data.total_course} extra="Active Course" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Assessment Average" count={data.average_score} extra="Assessment Average of total course" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Engagement Average" count={data.engagement_average} extra="Engagement Average of total course" />
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
                    Predicted Student Performance on Gender
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
                    Predicted Student Performance on Age
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
                    Predicted Student Performance on Course
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
                    Predicted Student Performance on Qualification
                  </Typography>
                </Stack>
              </Box>
              <QualificationAnalytics series={data.perf_on_qualification.series} categories={data.perf_on_qualification.categories} />
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
              <AverageAssessmentScore series={data.dist_of_total_clicks_on_course.series} />
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
              <ActivityEngagedOnCourse series={data.dist_of_activity_engaged_on_course.series} />
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
              <CompletitionRateOnCourse
                series={data.completion_rate_on_course.series}
                categories={data.completion_rate_on_course.categories}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={3} />
        </>
      )}
    </Grid>
  );
};

export default ComprehensiveAnalysis;
