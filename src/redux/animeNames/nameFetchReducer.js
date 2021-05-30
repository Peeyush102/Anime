import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS,
  FETCH_NAMES_FAILURE,
  SHOW_LIST,
} from "./nameFetchTypes";

/*
  anime name state {
    loading : boolean,
    name : array of string,
    error : string,
    visible : boolean
  }
 */

const initialState = {
  loading: false,
  names: [],
  error: "",
  visible: false,
};

const nameFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAMES_REQUEST:
      //request for api call to get data
      return {
        ...state,
        loading: true,
      };
    case FETCH_NAMES_SUCCESS:
      //setting data if api call is success
      return {
        ...state,
        loading: false,
        names: action.payload,
        error: "",
      };
    case FETCH_NAMES_FAILURE:
      //setting error message if error call failed
      return {
        ...state,
        loading: false,
        names: [],
        error: action.payload,
      };
    case SHOW_LIST:
      //setting visible conditionally
      //if value is provided in payload then should be set as payload
      //else value should be toggeled from previous state
      if (
        action.payload !== undefined &&
        action.payload !== null &&
        typeof action.payload === "boolean"
      )
        return {
          ...state,
          visible: action.payload,
        };
      else
        return {
          ...state,
          visible: !state.visible,
        };

    default:
      return state;
  }
};

export default nameFetchReducer;
