// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { TeamOutlined, PlusCircleOutlined } from '@ant-design/icons';

// icons
const icons = { TeamOutlined, PlusCircleOutlined };

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const analytics = {
  id: 'admin',
  title: <FormattedMessage id="admin" />,
  type: 'group',
  children: [
    {
      id: 'users',
      title: <FormattedMessage id="users" />,
      type: 'item',
      url: '/admin/users',
      icon: icons.TeamOutlined
    },
    {
      id: 'waitlist',
      title: <FormattedMessage id="waitlist" />,
      type: 'item',
      url: '/admin/waitlist',
      icon: icons.PlusCircleOutlined
    }
  ]
};

export default analytics;
