import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ThemeMode } from 'config';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      <Typography fontSize={'2rem'} fontWeight={'700'} fontFamily={'sans-serif'} color={'gray'} marginTop={'2rem'} gutterBottom>
        LMS Analytics
      </Typography>
    </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
