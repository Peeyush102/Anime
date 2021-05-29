import axios from "axios";
import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
  SET_ANIME_NAME,
  SET_PAGE_NUMBER,
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

export const setAnimeName = (name) => {
  return {
    type: SET_ANIME_NAME,
    payload: name,
  };
};

export const setPageNumber = (page) => {
  return {
    type: SET_PAGE_NUMBER,
    payload: page,
  };
};

export const fetchQuotes = (page = 1, anime = ``) => {
  return (dispatch) => {
    let uri = ``;
    if (anime) {
      uri = `/anime?title=${anime}&?page=${page}`;
    }
    if (anime && page) {
      dispatch(setAnimeName(anime));
      dispatch(setPageNumber(page));
    } else {
      dispatch(setAnimeName(``));
      dispatch(setPageNumber(1));
    }
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
