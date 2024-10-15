import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 60000,
});

// API request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// API response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    // Handle response error here
    return Promise.reject({
      response: error?.response?.data,
      status,
      statusText,
    });
  }
);

export default axiosClient;
