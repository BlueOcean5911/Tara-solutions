import { useMemo } from 'react';

// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Search from './Search';
import Localization from './Localization';
import useConfig from 'hooks/useConfig';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { i18n } = useConfig();
  const downXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);
  return <>{!downXS && localization}</>;
};

export default HeaderContent;
