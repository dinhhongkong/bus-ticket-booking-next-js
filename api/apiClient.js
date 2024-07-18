import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});


apiClient.interceptors.request.use(
  (response) => {
    const token = localStorage.getItem('token');
    if (token) {
      response.headers.Authorization = `Bearer ${token}`;
    }
    return response;
  },
  (error) => {
    if ( error.response.status === 401) {
    // if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  });


export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// Nếu bạn cần một hàm chung cho tất cả các phương thức HTTP
export const request = async (method, endpoint, data = null) => {
  try {
    const config = {
      method: method,
      url: endpoint,
    };
    if (data) {
      config.data = data;
    }
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    console.error(`Error making ${method} request:`, error);
    throw error;
  }
};