import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DASHBOARD_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ reverse, isIcon, sx, to }) => (
  <ButtonBase
    disableRipple
    component={Link}
    to={!to ? APP_DASHBOARD_PATH : to}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}
  >
    {isIcon ? <LogoIcon /> : <LogoMain reverse={reverse} />}
  </ButtonBase>
);

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
