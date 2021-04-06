const studyGraphReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDY_GRAPH':
      return action.payload;
    case 'CLEAR_STUDY_GRAPH':
      return [];
    default:
      return state;
  }
};

export default studyGraphReducer;
