import axios from 'axios';

// ASK ZIADDDD
export const BASE_URL = 'http://your-backend-url.com';

export const registerAdmin = async (userData, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/Admin/register`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain',
          Authorization: `Bearer ${token}`, // use your bearer token if required
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Register error:', error.response?.data || error.message);
    throw error;
  }
};