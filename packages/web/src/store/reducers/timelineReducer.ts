const initialState = {
  timeline: [],
};

const timelineReducer = (
  state = initialState,
  action: { type: string; payload: { timeline: [] } },
) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, timeline: action.payload.timeline };
    default:
      return { ...state };
  }
};

export default timelineReducer;
