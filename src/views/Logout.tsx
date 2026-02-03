import { useEffect } from 'react';
import {  useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem('token');

  useEffect(() => {
    navigate('/');
  }, [navigate]);
 //navigate('/');

  return (
   <p>Logged out</p>
   // <Navigate to={'/'} />
  );
};

export default Logout;
