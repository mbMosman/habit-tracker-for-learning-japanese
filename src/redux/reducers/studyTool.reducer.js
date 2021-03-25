const studyToolReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STUDY_TOOLS':
      return action.payload;
    case 'CLEAR_STUDY_TOOLS':
      return {};
    default:
      return state;
  }
};

export default studyToolReducer;
