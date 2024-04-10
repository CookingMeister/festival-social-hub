import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile2';

const ProtectedPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: token,
          },
        });
        console.log('Data:', response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile welcome={user?.username}
        user={user}
     />
    </div>
  );
};

export default ProtectedPage;
