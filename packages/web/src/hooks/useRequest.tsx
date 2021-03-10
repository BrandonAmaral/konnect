import { Method } from 'axios';
import { useState } from 'react';

import api from '../api/index';

interface Request {
  url: string;
  method: Method;
}

const useRequest = ({ url, method }: Request) => {
  const [errors, setErrors] = useState(null);

  const makeRequest = async (data = {}, params = '') => {
    try {
      setErrors(null);
      const response = await api({
        method,
        url: `${url + params}`,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@konnect:token')}`,
        },
      });

      return response.data;
    } catch (err) {
      if (err.response) {
        setErrors(err.response.data.error);
      }
      return {};
    }
  };

  return { makeRequest, errors };
};

export default useRequest;
