import { Box, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';
import PieChart from 'components/@extended/charts/PieChart';
import DistributionChart from 'components/@extended/charts/DistributionChart';
import RadialbarChart from 'components/@extended/charts/RadialbarChart';
import PolarChart from 'components/@extended/charts/PolarChart';
import CircleChart from 'components/@extended/charts/CircleChart';
import RadarChart from 'components/@extended/charts/RadarChart';

const AnalysisComponent = ({ data }) => {
  return (
    <>
      {/* firstPeriodRetentionRate */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="firstPeriodRetentionRate" />
              </Typography>
            </Stack>
          </Box>
          <PieChart
            id="firstPeriodRetentionRate"
            series={Object.values(data['firstPeriodRetentionRate'])}
            labels={Object.keys(data['firstPeriodRetentionRate'])}
          />
        </MainCard>
      </Grid>
      {/* percentageOfStudentsReEnrolledInRealTime */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfStudentsReEnrolledInRealTime" />
              </Typography>
            </Stack>
          </Box>
          <RadialbarChart
            id="percentageOfStudentsReEnrolledInRealTime"
            series={Object.values(data['percentageOfStudentsReEnrolledInRealTime'])}
            labels={Object.keys(data['percentageOfStudentsReEnrolledInRealTime'])}
          />
        </MainCard>
      </Grid>
      {/* percentageOfStudentsAtRisk */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfStudentsAtRisk" />
              </Typography>
            </Stack>
          </Box>
          <DistributionChart
            id="percentageOfStudentsAtRisk"
            series={[{ name: 'percentageOfStudentsAtRisk', data: Object.values(data['percentageOfStudentsAtRisk']) }]}
            categories={Object.keys(data['percentageOfStudentsAtRisk'])}
          />
        </MainCard>
      </Grid>
      {/* percentageOfStudentMessagesWithPositiveFeedback */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfStudentMessagesWithPositiveFeedback" />
              </Typography>
            </Stack>
          </Box>
          <PolarChart
            id="percentageOfStudentMessagesWithPositiveFeedback"
            series={Object.values(data['percentageOfStudentMessagesWithPositiveFeedback'])}
            labels={Object.keys(data['percentageOfStudentMessagesWithPositiveFeedback'])}
          />
        </MainCard>
      </Grid>
      {/* percentageOfImplementedActionRecommendations */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfImplementedActionRecommendations" />
              </Typography>
            </Stack>
          </Box>
          <CircleChart
            id="percentageOfImplementedActionRecommendations"
            series={Object.values(data['percentageOfImplementedActionRecommendations'])}
            labels={Object.keys(data['percentageOfImplementedActionRecommendations'])}
          />
        </MainCard>
      </Grid>
      {/* percentageOfAtRiskStudentsShowingImprovement */}
      <Grid item xs={12} md={8} lg={6}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfAtRiskStudentsShowingImprovement" />
              </Typography>
            </Stack>
          </Box>
          <PieChart
            id="percentageOfAtRiskStudentsShowingImprovement"
            series={Object.values(data['percentageOfAtRiskStudentsShowingImprovement'])}
            labels={Object.keys(data['percentageOfAtRiskStudentsShowingImprovement'])}
            type="pie"
          />
        </MainCard>
      </Grid>
      {/* percentageOfImprovementsInStudentExperience */}
      <Grid item xs={12} md={8} lg={12}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                <FormattedMessage id="percentageOfImprovementsInStudentExperience" />
              </Typography>
            </Stack>
          </Box>
          <RadarChart
            id="percentageOfImprovementsInStudentExperience"
            series={[
              {
                name: 'percentageOfImprovementsInStudentExperience',
                data: Object.values(data['percentageOfImprovementsInStudentExperience'])
              }
            ]}
            categories={Object.keys(data['percentageOfImprovementsInStudentExperience'])}
          />
        </MainCard>
      </Grid>
    </>
  );
};

AnalysisComponent.propTypes = {
  data: PropTypes.object
};

export default AnalysisComponent;
