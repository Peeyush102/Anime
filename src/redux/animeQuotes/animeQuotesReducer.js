import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
  SET_ANIME_NAME,
  SET_PAGE_NUMBER,
} from "./animeQuotesTypes";

const initialState = {
  loading: false,
  quotes: [],
  page: 0,
  name: "",
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
    case SET_ANIME_NAME:
      return {
        ...state,
        name: action.payload,
        quotes: [],
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload,
        quotes: [],
      };
    default:
      return state;
  }
};
export default animeQuoteReducer;
