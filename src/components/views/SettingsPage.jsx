import React from 'react';
import {useSelector} from 'react-redux';


function SettingsPage() {

  const user = useSelector((store) => store.user);

  return (
    <>
      <h2>Settings</h2>
      <p>Under Construction</p>
    </>
  );
}

export default SettingsPage;
