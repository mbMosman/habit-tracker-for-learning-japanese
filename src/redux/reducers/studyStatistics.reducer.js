const defaultState = {
    study_time: 0,
    vocab_count: 0,
    kanji_count: 0
  };

const studyHistoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STUDY_STATISTICS':
      return action.payload;
    case 'CLEAR_STUDY_STATISTICS':
      return defaultState;
    default:
      return state;
  }
};

export default studyHistoryReducer;
