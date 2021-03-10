import { combineReducers } from 'redux';

import timelineRefreshReducer from './timelineRefresh';

const all = combineReducers({
  timelineRefresh: timelineRefreshReducer,
});

export default all;
