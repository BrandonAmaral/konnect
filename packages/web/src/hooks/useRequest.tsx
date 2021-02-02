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
      const response = await api({ method: method, url: url, data: data });

      return response.data;
    } catch (err) {
      setErrors(err.response.data.error);
    }
  };

  return { makeRequest, errors };
};

export default useRequest;
