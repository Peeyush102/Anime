import { combineReducers } from "redux";
import animeQuoteReducer from "./animeQuotes/animeQuotesReducer";
import nameFetchReducer from "./animeNames/nameFetchReducer";

//combining reducers
const rootReducer = combineReducers({
  nameFetchReducer,
  animeQuoteReducer,
});

export default rootReducer;
