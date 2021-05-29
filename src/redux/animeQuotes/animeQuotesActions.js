import axios from "axios";
import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "./animeQuotesTypes";

export const fetchAnimeQuoteRequest = () => {
  return {
    type: FETCH_QUOTE_REQUEST,
  };
};

export const fetchAnimeQuoteSuccess = (data) => {
  return {
    type: FETCH_QUOTE_SUCCESS,
    payload: data,
  };
};

export const fetchAnimeQuoteFailure = (error) => {
  return {
    type: FETCH_QUOTE_FAILURE,
    payload: error,
  };
};

export const fetchQuotes = (page = 1, anime = ``) => {
  return (dispatch) => {
    const uri = anime === `` ? "" : `/anime?title=${anime}&?page=${page}`;
    dispatch(fetchAnimeQuoteRequest());
    axios
      .get(`https://animechan.vercel.app/api/quotes${uri}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAnimeQuoteSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchAnimeQuoteFailure(err.message));
      });
  };
};
