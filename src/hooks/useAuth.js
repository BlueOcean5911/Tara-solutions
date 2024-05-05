import { useContext } from 'react';

// auth provider
import SupabaseContext from 'contexts/SupabaseContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  const context = useContext(SupabaseContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
