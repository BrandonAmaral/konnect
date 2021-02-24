import { Method } from 'axios';
import { useState } from 'react';

import api from '../api/index';

interface Request {
  url: string;
  method: Method;
}

const useRequest = ({ url, method }: Request) => {
  const [errors, setErrors] = useState(null);

  const makeRequest = async (data = {}) => {
    try {
      setErrors(null);
      const response = await api({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            '@nightcrawler:token',
          )}`,
        },
      });

      return response.data;
    } catch (err) {
      setErrors(err.response.data.error);
      return {};
    }
  };

  return { makeRequest, errors };
};

export default useRequest;
