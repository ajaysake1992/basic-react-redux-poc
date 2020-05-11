import * as actionType from './actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
    const {INCREMENT, DECREMENT, ADDITION, SUBSTRACTION, RESULT_STORE, DELETE_RESULT} = actionType;
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
    case RESULT_STORE:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };

    case DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.payload.strResultId)
      };
  }

  return state;
};

export default reducer;
