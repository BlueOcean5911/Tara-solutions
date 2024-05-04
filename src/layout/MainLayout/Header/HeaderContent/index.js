import { useMemo } from 'react';

// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Profile from './Profile';
import Localization from './Localization';
import useConfig from 'hooks/useConfig';
import Search from './Search';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { i18n } = useConfig();
  const downXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);
  return (
    <>
      {localization}
      <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} />
      <Profile />
    </>
  );
};

export default HeaderContent;
