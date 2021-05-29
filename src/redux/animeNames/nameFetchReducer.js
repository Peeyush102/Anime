import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS,
  FETCH_NAMES_FAILURE,
  SHOW_LIST,
} from "./nameFetchTypes";

const initialState = {
  loading: false,
  names: [],
  error: "",
  visible: false,
};

const nameFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        names: action.payload,
        error: "",
      };
    case FETCH_NAMES_FAILURE:
      return {
        ...state,
        loading: false,
        names: [],
        error: action.payload,
      };
    case SHOW_LIST:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default nameFetchReducer;
