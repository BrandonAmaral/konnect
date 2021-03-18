import api from '../../api';

// Set validation error
export const setError = (message: string) => {
  return { type: 'ERROR', error: message };
};

// Fetch current user info
export const userInfo = (param: string) => async (dispatch: any) => {
  const { data } = await api.get(`/api/users/info/${param}`);

  dispatch({ type: 'USER_DATA', payload: { accountData: data } });
};
