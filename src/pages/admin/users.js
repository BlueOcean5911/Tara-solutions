// material-ui
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
// project import
import MainCard from 'components/MainCard';
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
  const [studentData, setStudentData] = useState({
    dayStuded: 0,
    activityEngaged: 0,
    totalClicks: 0,
    assessmentCompleted: 0,
    assessmentAverageScore: 0
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [messageID, setMessageID] = useState('');
  const predict = () => {
    uploadFilesService
      .predict(studentData)
      .then((response) => {
        if (response.data.status_code === 200) {
          if (response.data.result === 1) {
            setMessageID('predictMessage1');
          } else {
            setMessageID('predictMessage2');
          }
          handleOpen();
        } else {
          setMessageID('serverError');
        }
      })
      .catch((e) => {
        setMessageID('networkError');
        handleOpen();
        console.log(e);
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container xs={12} lg={12}>
            <Grid item xs={12} lg={6}>
              <img src="/asset/image/analytics-001.jpg" alt="Analytics" style={{ width: '100%', height: '100%' }} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                width={'100%'}
                height={'100%'}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', paddingX: { md: '2rem' } }}
              >
                <Typography variant="h2" color={'grey'} marginY={'1rem'}>
                  <FormattedMessage id="predictStuPerf" />
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1rem' } }} color={'black'}>
                  <FormattedMessage id="predictStuPerfDisp" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <MainCard
          title="Predict student performance"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '500px' }} gap={4}>
              <TextField
                id="day_studied"
                label={<FormattedMessage id="dayStudied" />}
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.dayStuded}
                onChange={(e) => setStudentData({ ...studentData, dayStuded: e.target.value })}
              />
              <TextField
                id="activities_engaged"
                label={<FormattedMessage id="activityEngagement" />}
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.activityEngaged}
                onChange={(e) => setStudentData({ ...studentData, activityEngaged: e.target.value })}
              />
              <TextField
                id="total_clicks"
                label={<FormattedMessage id="totalClicks" />}
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.totalClicks}
                onChange={(e) => setStudentData({ ...studentData, totalClicks: e.target.value })}
              />
              <TextField
                id="assessments_completed"
                label={<FormattedMessage id="assessCompletedRate" />}
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.assessmentCompleted}
                onChange={(e) => setStudentData({ ...studentData, assessmentCompleted: e.target.value })}
              />
              <TextField
                id="average_assessment_score"
                label={<FormattedMessage id="averageAssessmentScore" />}
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.assessmentAverageScore}
                onChange={(e) => setStudentData({ ...studentData, assessmentAverageScore: e.target.value })}
              />
              <Button variant="contained" sx={{ backgroundColor: '#043262' }} onClick={() => predict()}>
                <FormattedMessage id="predict" />
              </Button>
            </Box>
          </Box>
        </MainCard>
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            <FormattedMessage id="predictedResult" />
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            <FormattedMessage id={messageID} />
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default PredictStudentPerformance;
