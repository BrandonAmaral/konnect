const timelineRefreshReducer = (state = true, action: { type: string }) => {
  switch (action.type) {
    case 'REFRESH':
      state = true;
      return state;
    case 'STOP':
      state = false;
      return state;
    default:
      return state;
  }
};

export default timelineRefreshReducer;
