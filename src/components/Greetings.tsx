import { useState } from 'react';

const UserGreeting = () => {
  return (
    <h2>Terve kirjauttunut käyttäjä!</h2>
  )
};

const GuestGreeting = () => {
  return (
    <h2>Terve vieras!</h2>
  )
};

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

{/* Toinen tapa, vaihtuva nappula */}

    <button onClick={() => {
      // Toggle the login state
      setIsLoggedIn(!isLoggedIn)
      }}>

      {isLoggedIn ? 'Log out' : 'Log in'}
    </button>
    </>
  );
};
export default Greeting;
