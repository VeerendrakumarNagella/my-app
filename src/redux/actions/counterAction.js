import { INCREMENT, DECREMENT, RESET } from "../action-types/actionTypes";

export const increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
  });
};
