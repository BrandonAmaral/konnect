const initialState = {
  errorMessage: '',
  userData: [],
};

const accountReducer = (
  state = initialState,
  action: {
    type: string;
    error: string;
    payload: { accountData: Record<string, unknown> };
  },
) => {
  switch (action.type) {
    case 'ERROR':
      return { ...state, errorMessage: action.error };
    case 'USER_DATA':
      return { ...state, userData: action.payload.accountData };
    default:
      return { ...state };
  }
};

export default accountReducer;
