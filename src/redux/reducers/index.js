import { combineReducers } from 'redux';
import taskReducer from './taskReducers';

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
