import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

const ProtectedPage = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  // gets user info
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: token,
          },
        });
        response.data? setUser(response.data) : setUser('');
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

  //displays user info
  return (
    <div>
      <Profile welcome={user?.username}
        user={user}
     />
    </div>
  );
};

export default ProtectedPage;
