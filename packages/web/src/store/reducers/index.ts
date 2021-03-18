import { combineReducers } from 'redux';

import timelineReducer from './timelineReducer';
import accountReducer from './accountReducer';

const all = combineReducers({
  timeline: timelineReducer,
  account: accountReducer,
});

export default all;
