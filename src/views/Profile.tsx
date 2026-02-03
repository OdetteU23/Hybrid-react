import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';
import type {UserWithNoPassword} from 'hybrid-types/DBTypes';

const Profile = () => {
  const [user, setUser] = useState<UserWithNoPassword | null>(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userResponse = await getUserByToken(token);
        console.log('user profile', userResponse);
        setUser(userResponse.user);
      }
    };
    getUserInfo();
  }, [getUserByToken]);

  return (
    <>
      {user && (
        <>
          <h2>{user.username}</h2>
          <p> {user.username} {user.email}</p>
          {/*<p>user level: {user.user_level}</p>*/}
        </>
      )}
    </>
  );
};

export default Profile;

