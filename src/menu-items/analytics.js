// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BarChartOutlined, StockOutlined, RiseOutlined, PieChartOutlined } from '@ant-design/icons';

// icons
const icons = { BarChartOutlined, StockOutlined, RiseOutlined, PieChartOutlined };

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const analytics = {
  id: 'analytics',
  title: <FormattedMessage id="analytics" />,
  type: 'group',
  children: [
    {
      id: 'risk-detector',
      title: <FormattedMessage id="riskDectection" />,
      type: 'item',
      url: '/analytics/risk-detector',
      icon: icons.StockOutlined
    },
    {
      id: 'student-performance',
      title: <FormattedMessage id="studentPerformance" />,
      type: 'item',
      url: '/analytics/student-performance',
      icon: icons.BarChartOutlined
    },
    {
      id: 'drop-out',
      title: <FormattedMessage id="dropOutAnalysis" />,
      type: 'item',
      url: '/analytics/drop-out',
      icon: icons.RiseOutlined
    },
    {
      id: 'retention',
      title: <FormattedMessage id="retention" />,
      type: 'item',
      url: '/analytics/retention',
      icon: icons.PieChartOutlined
    }
  ]
};

export default analytics;
