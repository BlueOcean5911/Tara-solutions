// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BarChartOutlined, StockOutlined } from '@ant-design/icons';

// icons
const icons = { BarChartOutlined, StockOutlined };

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const analytics = {
  id: 'analytics',
  title: <FormattedMessage id="analytics" />,
  type: 'group',
  children: [
    {
      id: 'analytics-predict',
      title: <FormattedMessage id="analyticsPredict" />,
      type: 'item',
      url: '/analytics/predict',
      icon: icons.StockOutlined
    },
    {
      id: 'analytics-',
      title: <FormattedMessage id="comprehensiveAnalytics" />,
      type: 'item',
      url: '/analytics/comprehensive-analysis',
      icon: icons.BarChartOutlined
    }
  ]
};

export default analytics;
