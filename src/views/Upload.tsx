//import React from 'react';
import {type NavigateFunction, useNavigate} from 'react-router';


const Upload = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <h1>Welcome to the Upload View!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Upload;
