import React, { createContext, useCallback, useState, useContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setError } from '../store/actions/accountActions';

interface AuthState {
  token: string;
  user: { _id: string; tag: string };
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  username: string;
  tag: string;
  password: string;
}

interface AuthContextData {
  user: { _id: string; tag: string };
  register(credentials: RegisterCredentials): Promise<void>;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@konnect:token');
    const user = localStorage.getItem('@konnect:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const dispatch = useDispatch();

  const register = useCallback(async ({ email, username, tag, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/users/create`,
        {
          email,
          username,
          tag,
          password,
        },
      );

      const { token, user } = response.data;

      localStorage.setItem('@konnect:token', token);
      localStorage.setItem('@konnect:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      dispatch(setError(err.response.data.error));
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/users/auth`,
        {
          email,
          password,
        },
      );

      const { token, user } = response.data;

      localStorage.setItem('@konnect:token', token);
      localStorage.setItem('@konnect:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      dispatch(setError(err.response.data.error));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@konnect:token');
    localStorage.removeItem('@konnect:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Function useAuth must be used within AuthProvider');
  }

  return context;
}
