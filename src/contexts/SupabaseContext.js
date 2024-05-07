import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';

// action - state management
import { LOGIN, LOGOUT } from 'store/reducers/actions';
import authReducer from 'store/reducers/auth';

// project import
import Loader from 'components/Loader';

// import service
import { createDemoRequest, checkPending } from 'service/demo-request.service';
import { enqueueSnackbar } from 'notistack';

// supabase initialize
import { supabase } from 'service/supabaseClient';
import { checkUser } from 'service/users.service';

// const
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| Supabase CONTEXT & PROVIDER ||============================== //

const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser) {
        const pending = await checkPending(authUser.email);
        const user = await checkUser(authUser.email);
        if (pending) {
          enqueueSnackbar('Now your request is pending...', { variant: 'warning' });
          dispatch({
            type: LOGOUT
          });
          return;
        }
        console.log(user, 'user infor');
        if (!user) {
          enqueueSnackbar('Your account has been suspended', { variant: 'error' });
          dispatch({
            type: LOGOUT
          });
          return;
        }
        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true,
            user: {
              id: authUser.id,
              email: authUser.email,
              name: authUser.user_metadata.name,
              role: user.role
            }
          }
        });
      } else {
        dispatch({
          type: LOGOUT
        });
      }
    };
    fetchUserData();
  }, [dispatch, authUser]);

  const supabaseEmailPasswordSignIn = async (email, password) => {
    const {
      data: { user },
      error
    } = await supabase.auth.signInWithPassword({ email: email, password: password });
    setAuthUser(user);
    return error;
  };

  const supabaseRegister = async (email, password, firstName, lastName, company) => {
    try {
      const userMetadata = {
        name: firstName + ' ' + lastName,
        company: company
      };
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            ...userMetadata
          }
        }
      });

      if (error) {
        console.error('Error signing up:', error.message);
        throw error;
      }

      createDemoRequest(email, firstName, lastName, company);
    } catch (error) {
      // Handle registration error
      console.error('Error signing up:', error.message);
    }
  };

  const logout = async () => {
    setAuthUser(null);
    await supabase.auth.signOut();
  };

  const resetPassword = async (email) => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.REACT_APP_URL + '/reset-password'
    });
  };

  const updatePassword = async (password) => {
    await supabase.auth.updateUser({
      password
    });
  };

  const updateProfile = () => {};
  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return (
    <SupabaseContext.Provider
      value={{
        ...state,
        supabaseRegister,
        supabaseEmailPasswordSignIn,
        login: () => {},
        logout,
        resetPassword,
        updatePassword,
        updateProfile
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

SupabaseProvider.propTypes = {
  children: PropTypes.node
};

export default SupabaseContext;
