// material-ui
import { Typography, Grid, Box, Modal, Button, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { FormattedMessage } from 'react-intl';
import ApexChart from 'components/third-party/RadialBarChart';
import { useState } from 'react';

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

const DropOutAnalysis = () => {
  const [studentData, setStudentData] = useState({
    numCredits: 0,
    failureRate: 0,
    classAttendanceFreq: 0,
    employmentStatus: 0,
    financialSupport: 0,
    previousEducationType: 0,
    familyIncomeRange: 0
  });

  const [dropOutLevel, setDropOutLevel] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [messageID, setMessageID] = useState('');
  const predict = () => {
    uploadFilesService
      .predict(studentData)
      .then((response) => {
        if (response.data.status_code === 200) {
          if (response.data.result < 0.5) {
            setMessageID('predictMessage1');
          } else {
            setMessageID('predictMessage2');
          }
          setDropOutLevel(parseInt(response.data.result * 100));
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
                <Typography variant="h2" color={'grey'} marginY={'1rem'}>
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
        <MainCard sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '500px' }} gap={4}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="label-numCredits">
                  <FormattedMessage id="numCredits" />
                </InputLabel>
                <Select
                  labelId="label-numCredits"
                  id="numCredits"
                  label={<FormattedMessage id="numCredits" />}
                  value={studentData.numCredits}
                  onChange={(e) => setStudentData({ ...studentData, numCredits: e.target.value })}
                >
                  <MenuItem value={0}>Less than full load</MenuItem>
                  <MenuItem value={1}>Full load</MenuItem>
                  <MenuItem value={2}>More than full load</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="failtureRate"
                label={<FormattedMessage id="failureRate" />}
                variant="outlined"
                defaultValue={0}
                type="number"
                value={studentData.failureRate}
                onChange={(e) => setStudentData({ ...studentData, failureRate: e.target.value })}
              />
              <TextField
                id="classAttendanceFreq"
                label={<FormattedMessage id="classAttendanceFreq" />}
                variant="outlined"
                defaultValue={0}
                type="number"
                value={studentData.classAttendanceFreq}
                onChange={(e) => setStudentData({ ...studentData, classAttendanceFreq: e.target.value })}
              />
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="label-employmentStatus">
                  <FormattedMessage id="employmentStatus" />
                </InputLabel>
                <Select
                  labelId="label-employmentStatus"
                  id="employmentStatus"
                  label={<FormattedMessage id="employmentStatus" />}
                  value={studentData.employmentStatus}
                  onChange={(e) => setStudentData({ ...studentData, employmentStatus: e.target.value })}
                >
                  <MenuItem value={0}>Full-time job</MenuItem>
                  <MenuItem value={1}>Part-time job</MenuItem>
                  <MenuItem value={2}>Unemployed</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="label-financialSupport">
                  <FormattedMessage id="financialSupport" />
                </InputLabel>
                <Select
                  labelId="label-financialSupport"
                  id="financialSupport"
                  label={<FormattedMessage id="financialSupport" />}
                  variant="outlined"
                  value={studentData.financialSupport}
                  onChange={(e) => setStudentData({ ...studentData, financialSupport: e.target.value })}
                >
                  <MenuItem value={0}>Yes</MenuItem>
                  <MenuItem value={1}>No</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="label-previousEducationType">
                  <FormattedMessage id="previousEducationType" />
                </InputLabel>
                <Select
                  labelId="label-previousEducationType"
                  id="previousEducationType"
                  label={<FormattedMessage id="previousEducationType" />}
                  variant="outlined"
                  value={studentData.previousEducationType}
                  onChange={(e) => setStudentData({ ...studentData, previousEducationType: e.target.value })}
                >
                  <MenuItem value={0}>Public</MenuItem>
                  <MenuItem value={1}>Private</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="label-familyIncomeRange">
                  <FormattedMessage id="familyIncomeRange" />
                </InputLabel>
                <Select
                  labelId="label-familyIncomeRange"
                  id="familyIncomeRange"
                  label={<FormattedMessage id="familyIncomeRange" />}
                  variant="outlined"
                  value={studentData.familyIncomeRange}
                  onChange={(e) => setStudentData({ ...studentData, familyIncomeRange: e.target.value })}
                >
                  <MenuItem value={0}>Less than $400</MenuItem>
                  <MenuItem value={1}>$401 - $1000</MenuItem>
                  <MenuItem value={1}>$1001 - $1600</MenuItem>
                  <MenuItem value={1}>More than $1601</MenuItem>
                </Select>
              </FormControl>
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
            <FormattedMessage id="dropOutLevel" />
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            {messageID !== 'serverError' ? (
              <>
                {/* <ApexChart value={dropOutLevel} /> */}
                <ApexChart value={dropOutLevel} />
                <Typography id="modal-modal-description" textAlign={'center'} variant="h5" sx={{ mt: 2 }}>
                  <FormattedMessage id={messageID} />
                </Typography>
              </>
            ) : (
              <>
                <Typography id="modal-modal-description" textAlign={'center'} variant="h5" sx={{ mt: 2 }}>
                  <FormattedMessage id={messageID} />
                </Typography>
              </>
            )}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default DropOutAnalysis;
