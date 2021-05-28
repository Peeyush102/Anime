import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "./animeQuotesTypes";

const initialState = {
  loading: false,
  quotes: [],
  page: 0,
  anime: "",
  error: "",
};

const animeQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
        loading: false,
        error: ``,
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        quotes: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default animeQuoteReducer;
