import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from "../action-types/actionTypes";

const initialState = {
  loading: false,
  users: [],
  errorMessage: "",
};

const usersDataReducer = (state = initialState, action) => {
  if (action.type === GET_USERS_LOADING) {
    return {
      ...state,
      loading: action.data.loading,
    };
  } else if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: action.data.loading,
      users: action.data.users,
    };
  } else if (action.type === GET_USERS_ERROR) {
    return {
      ...state,
      loading: action.data.loading,
      errorMessage: action.data.errorMessage,
    };
  }
  return state;
};

export default usersDataReducer;
