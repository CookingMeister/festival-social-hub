import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/protected', {
          headers: {
            Authorization: token,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error('Failed to fetch protected data', error);
      }
    };

    fetchProtectedData();
  }, []);

  return <div>{message}</div>;
};

export default ProtectedPage;
