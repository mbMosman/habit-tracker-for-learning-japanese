import React from 'react';
import {useSelector} from 'react-redux';



function UserPage() {

  const user = useSelector((store) => store.user);

  return (
    <>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
