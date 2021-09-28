import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGNIN_START:
      return {
        ...state,
      };

    case UserActionTypes.EMAIL_SIGNIN_START:
      return {
        ...state,
        payload: action.payload,
      };

    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case UserActionTypes.SIGNUP_START:
      return {
        ...state,
        payload: action.payload,
      };
    case UserActionTypes.SIGNOUT_FAILURE:
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
