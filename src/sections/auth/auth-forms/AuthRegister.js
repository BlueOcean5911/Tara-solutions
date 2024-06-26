import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Autocomplete,
  TextField
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// import country data
import countries from 'data/countries';
import { sendEmail } from 'service/send-mail';
import { FormattedMessage } from 'react-intl';

// ============================|| JWT - REGISTER ||============================ //

const AuthRegister = () => {
  const { supabaseRegister } = useAuth();
  const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const getFormattedMessage = (firstName, lastName, company, country, phoneNumber, email, message) => {
    let formattedMessage = '';
    formattedMessage += `Name: ${firstName} ${lastName} \n`;
    formattedMessage += `Country: ${country} \n`;
    formattedMessage += `Company: ${company} \n`;
    formattedMessage += `Phone Number: ${phoneNumber}`;
    formattedMessage += `Email: ${email}`;
    formattedMessage += `Message: ${message}`;
    return formattedMessage;
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          country: { code: 'CR', label: 'Costa Rica', phone: '+506' },
          phone: '',
          company: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          company: Yup.string().max(255).required('Company is required'),
          phone: Yup.string().max(255).required('Phone Number is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const body = getFormattedMessage(
              values.firstname,
              values.lastname,
              values.company,
              values.country.label,
              values.country.phone + values.country.phone,
              values.email,
              values.message
            );
            const subject = 'New request has been received!';
            sendEmail(subject, body).then((res) => {
              if (res == 'success') {
                dispatch(
                  openSnackbar({
                    open: true,
                    message: 'Successfully your request has been sent!',
                    variant: 'alert',
                    alert: {
                      color: 'success'
                    },
                    close: false
                  })
                );
                setTimeout(() => {
                  navigate('/login', { replace: true });
                }, 1500);
              } else {
                openSnackbar({
                  open: true,
                  message: 'Unfortunately, your request has not been sent.',
                  variant: 'alert',
                  alert: {
                    color: 'error'
                  },
                  close: false
                });
              }
            });
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, setValues, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">
                    <FormattedMessage id="firstname" />*
                  </InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">
                    <FormattedMessage id="lastname" />*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">
                    <FormattedMessage id="company" />*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="company"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Demo Inc."
                    inputProps={{}}
                  />
                  {touched.company && errors.company && (
                    <FormHelperText error id="helper-text-company-signup">
                      {errors.company}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="country-signup">
                    <FormattedMessage id="country" />
                  </InputLabel>
                  <Autocomplete
                    id="country-signup"
                    fullWidth
                    type="country"
                    name="country"
                    options={countries}
                    value={values.country}
                    onBlur={handleBlur}
                    onChange={(event, value) => {
                      setValues({ ...values, country: value }); // Update the country value in Formik form state
                    }}
                    isOptionEqualToValue={(option, value) => option.code === value.code}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box key={option.code} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.code && (
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                        )}
                        {option.label} ({option.code}) {option.phone}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Choose a country"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password' // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="phone-number-signup">
                    <FormattedMessage id="phoneNumber" />*
                  </InputLabel>
                  <Grid container>
                    <Grid item xs={2}>
                      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                        {values.country ? values.country.phone : ''}
                      </Stack>
                    </Grid>
                    <Grid item xs={10}>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.phone && errors.phone)}
                        id="phone-number-login"
                        type="phone"
                        name="phone"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Phone number"
                        inputProps={{}}
                      />
                      {touched.phone && errors.phone && (
                        <FormHelperText error id="helper-text-phone-signup">
                          {errors.phone}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">
                    <FormattedMessage id="emailAddress" />
                  *</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">
                    <FormattedMessage id="pwd" />*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">
                    <FormattedMessage id="message" />
                  </InputLabel>
                  <TextField
                    fullWidth
                    id="message"
                    type="text"
                    value={values.message}
                    name="message"
                    multiline
                    maxRows={5}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    <FormattedMessage id="sendRequest" />
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
