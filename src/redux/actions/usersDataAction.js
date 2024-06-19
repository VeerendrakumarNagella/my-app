import axios from "axios";
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from "../action-types/actionTypes";

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: GET_USERS_LOADING,
    data: {
      loading: true,
    },
  });

  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      data: {
        loading: false,
        users: data,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR,
      data: {
        loading: false,
        errorMessage: error.message,
      },
    });
  }
};
