// material-ui
import { Typography, Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    {/* row 1 */}
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <Typography variant="h5">Dashboard</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Total users" count="4,42,236" percentage={59.3} extra="35,000" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Total course" count="78,250" percentage={70.5} extra="8,900" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Assessment Average" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticEcommerce title="Engagement Aeverage" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
    </Grid>
  </Grid>
);

export default SamplePage;
