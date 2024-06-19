import { INCREMENT, DECREMENT, RESET } from "../action-types/actionTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === RESET) {
    return {
      counter: 0,
    };
  } else {
    return state;
  }
};

export default counterReducer;
