// material-ui
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
// project import
import MainCard from 'components/MainCard';
import { useState } from 'react';
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

  const [message, setMessage] = useState('');
  const predict = () => {
    uploadFilesService
      .predict(studentData)
      .then((response) => {
        if (response.data.status_code === 200) {
          if (response.data.result === 1) {
            setMessage(' This student will be completed the course successfully.');
          } else {
            setMessage(' This student may need some additional support to successfully complete the course.');
          }
          handleOpen();
        }
      })
      .catch((e) => {
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
                  Predict Student Performance
                </Typography>
                <Typography variant="h4" lineHeight={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.4rem' } }}>
                  Predicting student performance on an online Learning Management System (LMS) is a groundbreaking capability that empowers
                  educators and institutions to proactively identify and support students at risk, while also enabling high-achieving
                  students to excel further. By leveraging advanced data analytics and machine learning algorithms, this innovative approach
                  provides a comprehensive overview of student engagement, progress, and potential success within the online course
                  environment.
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
                label="Day stuided"
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.dayStuded}
                onChange={(e) => setStudentData({ ...studentData, dayStuded: e.target.value })}
              />
              <TextField
                id="activities_engaged"
                label="Activity Engaged"
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.activityEngaged}
                onChange={(e) => setStudentData({ ...studentData, activityEngaged: e.target.value })}
              />
              <TextField
                id="total_clicks"
                label="Total clicks"
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.totalClicks}
                onChange={(e) => setStudentData({ ...studentData, totalClicks: e.target.value })}
              />
              <TextField
                id="assessments_completed"
                label="Assessment completed Rate(%)"
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.assessmentCompleted}
                onChange={(e) => setStudentData({ ...studentData, assessmentCompleted: e.target.value })}
              />
              <TextField
                id="average_assessment_score"
                label="Average assessment score"
                variant="outlined"
                type="number"
                defaultValue={0}
                value={studentData.assessmentAverageScore}
                onChange={(e) => setStudentData({ ...studentData, assessmentAverageScore: e.target.value })}
              />
              <Button variant="contained" onClick={() => predict()}>
                Predict
              </Button>
            </Box>
          </Box>
        </MainCard>
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Result
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            {message}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default PredictStudentPerformance;
