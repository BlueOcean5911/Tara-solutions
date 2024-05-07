import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

const AdminGuard = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && !(user.role === 'admin' || user.role === 'owner')) {
      navigate('dashboard', {
        state: {
          from: location.pathname
        },
        replace: true
      });
      navigate('dashboard', { replace: true });
    }
  }, [user, navigate, location]);

  return children;
};

AdminGuard.propTypes = {
  children: PropTypes.node
};

export default AdminGuard;
