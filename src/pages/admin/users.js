// material-ui
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
// project import
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import uploadFilesService from 'service/upload-files.service';

// ==============================|| SAMPLE PAGE ||============================== //

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #888',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4
};

const PredictStudentPerformance = () => {
  return (
    <Grid container spacing={3}>
      <Grid item spacing={3} xs={12}>
        <Typography variant="h2">Users</Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container xs={12}></Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default PredictStudentPerformance;
