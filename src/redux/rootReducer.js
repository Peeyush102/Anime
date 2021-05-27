import { combineReducers } from "redux";
import animeQuoteReducer from "./animeQuotes/animeQuotesReducer";
import nameFetchReducer from "./animeNames/nameFetchReducer";

const rootReducer = combineReducers({
  nameFetchReducer,
  animeQuoteReducer,
});

export default rootReducer;
