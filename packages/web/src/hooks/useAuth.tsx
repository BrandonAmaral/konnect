import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../api/index';

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
  validationError: string | null;
  clearError(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@nightcrawler:token');
    const user = localStorage.getItem('@nightcrawler:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const [error, setError] = useState(null);

  const setErrorToNull = useCallback(() => {
    setError(null);
  }, []);

  const history = useHistory();

  const register = useCallback(
    async ({ email, username, tag, password }) => {
      try {
        const response = await api.post('/api/users/create', {
          email,
          username,
          tag,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@nightcrawler:token', token);
        localStorage.setItem('@nightcrawler:user', JSON.stringify(user));

        setData({ token, user });

        history.push('/home');
      } catch (err) {
        setError(err.response.data.error);
      }
    },
    [history],
  );

  const login = useCallback(
    async ({ email, password }) => {
      try {
        const response = await api.post('/api/users/auth', {
          email,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@nightcrawler:token', token);
        localStorage.setItem('@nightcrawler:user', JSON.stringify(user));

        setData({ token, user });

        history.push('/home');
      } catch (err) {
        setError(err.response.data.error);
      }
    },
    [history],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('@nightcrawler:token');
    localStorage.removeItem('@nightcrawler:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        register,
        login,
        logout,
        validationError: error,
        clearError: setErrorToNull,
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
