import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '../controls/TextInput';
import PasswordInput from '../controls/PasswordInput';
import SubmitButton from '../controls/SubmitButton';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form onSubmit={registerUser}>
      <h2>New User Registration</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <TextInput label="Username" 
          value={username}
          setValue={(event) => setUsername(event.target.value)} /><br />
      <PasswordInput value={password} 
          setPassword={(event) => setPassword(event.target.value)} /><br />
      <SubmitButton label="Register" />
    </form>
  );
}

export default RegisterForm;
