// LoginForm.tsx
import { useState } from 'react';
import { UseUserContext } from '../hooks/ContextHooks';
import type { Credentials } from '../Utilis/types/localTypes';

const LoginForm = () => {
  const { handleLogin } = UseUserContext();
  const [inputs, setInputs] = useState<Credentials>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  };

  const doSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(inputs);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return (
    <form onSubmit={doSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={inputs.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
