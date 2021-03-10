const studyHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STUDY_HISTORY':
      return action.payload;
    case 'CLEAR_STUDY_HISTORY':
      return [];
    default:
      return state;
  }
};

export default studyHistoryReducer;
