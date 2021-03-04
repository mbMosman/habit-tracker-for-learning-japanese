import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import TextInput from '../controls/TextInput';
import PasswordInput from '../controls/PasswordInput';
import SubmitButton from '../controls/SubmitButton';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({ type: 'LOGIN', payload: { username, password } });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; 

  return (
    <form onSubmit={login}>
      <h2>Welcome!</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <TextInput label="Username" 
          value={username}
          setValue={(event) => setUsername(event.target.value)} /><br />
      <PasswordInput value={password} 
          setPassword={(event) => setPassword(event.target.value)} /><br />
      <SubmitButton label="Log In"  />
    </form>
  );
}

export default LoginForm;
