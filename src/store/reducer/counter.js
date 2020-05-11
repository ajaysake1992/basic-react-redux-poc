import * as actionType from '../actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
    const {INCREMENT, DECREMENT, ADDITION, SUBSTRACTION} = actionType;
  // eslint-disable-next-line
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case ADDITION:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case SUBSTRACTION:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
  }

  return state;
};

export default reducer;
