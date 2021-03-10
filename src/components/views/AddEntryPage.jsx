import React from 'react';
import {useSelector} from 'react-redux';


function AddEntryPage() {

  const user = useSelector((store) => store.user);

  return (
    <>
      <h2>Add Entry</h2>
      <p>Under Construction</p>
    </>
  );
}

export default AddEntryPage;
