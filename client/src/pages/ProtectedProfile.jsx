import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

const ProtectedPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/users', {
          headers: {
            Authorization: token,
          },
        });
        console.log('Response:', response);
        setUser(response.data.user);
        console.log('User:', user);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile welcome={user?.name} />
    </div>
  );
};

export default ProtectedPage;
