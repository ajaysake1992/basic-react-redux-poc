import * as actionType from '../actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
    const {RESULT_STORE, DELETE_RESULT} = actionType;
  // eslint-disable-next-line
  switch (action.type) {

    case RESULT_STORE:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
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
