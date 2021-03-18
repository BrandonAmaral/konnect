import api from '../../api';

// Fetch user timeline
export const fetch = () => async (dispatch: any) => {
  const { data } = await api({
    url: '/api/posts/timeline',
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('@konnect:token')}`,
    },
  });

  dispatch({
    type: 'FETCH',
    payload: {
      timeline: data,
    },
  });
};
