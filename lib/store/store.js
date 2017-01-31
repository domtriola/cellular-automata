import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const _defaultState = {

};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    rootReducer,
    preloadedState
  )
);

export default configureStore;
