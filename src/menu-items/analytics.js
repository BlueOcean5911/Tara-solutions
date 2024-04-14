// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BarChartOutlined } from '@ant-design/icons';

// icons
const icons = { BarChartOutlined };

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const analytics = {
  id: 'analytics',
  title: <FormattedMessage id="analytics" />,
  type: 'group',
  children: [
    {
      id: 'analytics',
      title: <FormattedMessage id="analytics" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.BarChartOutlined
    }
  ]
};

export default analytics;
