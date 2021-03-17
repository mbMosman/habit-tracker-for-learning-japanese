import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function EntryDetailPage() {

  const dispatch = useDispatch();
  const details = useSelector((store) => store.studyDetail);
  const { id } = useParams();

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_DETAIL', payload: {id} });
    }, 
    []
  );

  return (
    <>
      <h2>View Entry</h2>
      <p>Under Construction - Details for id {id}</p>
    </>
  );
}

export default EntryDetailPage;
