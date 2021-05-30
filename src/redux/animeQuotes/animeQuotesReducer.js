import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
  SET_ANIME_NAME,
  SET_PAGE_NUMBER,
} from "./animeQuotesTypes";
/*
animeQuote state definition : {
  loading : boolean,
  quotes : Array of strings
  page : number,
  name : string,
  error : string
}
 */
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
      //setting loading as true, which can be used to show loading screen to user while data is being fetched
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUOTE_SUCCESS:
      //if quotes are fetched successfully
      return {
        ...state,
        quotes: action.payload,
        loading: false,
        error: ``,
      };
    case FETCH_QUOTE_FAILURE:
      //if quotes are not fetched successfully, error is set and quotes is emptied
      return {
        ...state,
        quotes: [],
        loading: false,
        error: action.payload,
      };
    case SET_ANIME_NAME:
      //setting anime name (updated from url in showQuotes.js)
      return {
        ...state,
        name: action.payload,
        quotes: [],
      };
    case SET_PAGE_NUMBER:
      //setting page number (updated from url in showQuotes.js)
      return {
        ...state,
        page: action.payload,
        quotes: [],
      };
    default:
      //in default case previous state is returned
      return state;
  }
};
export default animeQuoteReducer;
