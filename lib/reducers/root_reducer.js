import { combineReducers } from 'redux';
import cyclicReducer from './cyclic_reducer';

const rootReducer = combineReducers({
  cyclic: cyclicReducer
});

export default rootReducer;
