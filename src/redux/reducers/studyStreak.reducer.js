const studyStreakReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'SET_STUDY_STREAK':
      return action.payload;
    case 'CLEAR_STUDY_STREAK':
      return {count: 0};
    default:
      return state;
  }
};

export default studyStreakReducer;
