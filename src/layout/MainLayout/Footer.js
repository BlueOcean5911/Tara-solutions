import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">
      &copy; <FormattedMessage id="allRightReserved" />
    </Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link component={RouterLink} to="https://tarasolutions-cr.com/eng/acerca-de/" target="_blank" variant="caption" color="textPrimary">
        <FormattedMessage id='contactUsLink1' />
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
