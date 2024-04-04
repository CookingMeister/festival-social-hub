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
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: token,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile welcome={user.name} />
    </div>
  );
};

export default ProtectedPage;
