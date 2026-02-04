import { useState } from 'react';
import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import type {RegisterCredentials} from '../Utilis/types/localTypes';

const RegisterForm = () => {
  const {postRegister} = useUser();
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const initValues: RegisterCredentials = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {
      // eslint-disable-next-line react-hooks/immutability
      const result = await postRegister(inputs as RegisterCredentials);
      console.log('post registration result', result);
      setSuccessMessage('The registration was successful!');
      setErrorMessage('');
    } catch (error) {
      console.error('Registration failed', error);
      setErrorMessage(error instanceof Error ? error.message : String(error));
      setSuccessMessage('');
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h2>Register</h2>
      {successMessage && (
        <div role="status" style={{ color: 'green', marginBottom: '1rem' }}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div role="alert" style={{ color: 'red', marginBottom: '1rem' }}>
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginusername">Username</label>
          <input
            name="username"
            type="text"
            id="loginusername"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
