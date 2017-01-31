

const _defaultState = Object.freeze({

});

const cyclicReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    default:
      return state;
  }
};

export default cyclicReducer;
