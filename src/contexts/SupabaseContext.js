import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';

// third-party
import { createClient } from '@supabase/supabase-js';

// action - state management
import { LOGIN, LOGOUT } from 'store/reducers/actions';
import authReducer from 'store/reducers/auth';

// project import
import Loader from 'components/Loader';

// import service
import { createDemoRequest } from 'service/demo-request.service';
import { findUserByEmail } from 'service/users.service';
import { enqueueSnackbar } from 'notistack';

// supabase initialize
import { supabase } from 'service/supabaseClient';

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
        const isUser = await findUserByEmail(supabase, authUser.email);
        if (isUser === null) {
          enqueueSnackbar('Now your request is pending...', { variant: 'warning' });
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
              name: authUser.user_metadata.name
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
      const { data, error } = await supabase.auth.signUp({
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

  const logout = () => supabase.auth.signOut();

  const resetPassword = async (email) => {
    await supabase.auth.resetPasswordForEmail(email);
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
