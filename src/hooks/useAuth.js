import { useContext } from 'react';

// auth provider
import FirebaseContext from 'contexts/FirebaseContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  const context = useContext(FirebaseContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
