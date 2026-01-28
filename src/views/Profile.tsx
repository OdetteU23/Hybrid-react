import {type NavigateFunction, useNavigate} from 'react-router';



const Profile = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <h1> Profile View!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      </div>
  );
}

export default Profile;

