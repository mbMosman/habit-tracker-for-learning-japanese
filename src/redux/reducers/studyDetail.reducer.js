const studyDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDY_DETAIL':
      return action.payload;
    case 'CLEAR_STUDY_DETAIL':
      return {};
    default:
      return state;
  }
};

export default studyDetailReducer;
