import axios from "axios";
import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
  SET_ANIME_NAME,
  SET_PAGE_NUMBER,
} from "./animeQuotesTypes";

export const fetchAnimeQuoteRequest = () => {
  //making request for data
  return {
    type: FETCH_QUOTE_REQUEST,
  };
};

export const fetchAnimeQuoteSuccess = (data) => {
  //if data fetch successfull data is set
  return {
    type: FETCH_QUOTE_SUCCESS,
    payload: data,
  };
};

export const fetchAnimeQuoteFailure = (error) => {
  //if error is encountered in data fetching
  return {
    type: FETCH_QUOTE_FAILURE,
    payload: error,
  };
};

export const setAnimeName = (name) => {
  //setting anime name
  return {
    type: SET_ANIME_NAME,
    payload: name,
  };
};

export const setPageNumber = (page) => {
  //setting page number
  return {
    type: SET_PAGE_NUMBER,
    payload: page,
  };
};

export const fetchQuotes = (page = 1, anime = ``) => {
  //deafult parameters page = 1, anime = empty String
  return (dispatch) => {
    let uri = ``;
    //setting uri based on anime and page
    if (anime) {
      uri = `/anime?title=${anime}&?page=${page}`;
    }
    if (anime && page) {
      //updating name and page number
      dispatch(setAnimeName(anime));
      dispatch(setPageNumber(page));
    } else {
      //if correct name and page number are presnet, default are set
      dispatch(setAnimeName(``));
      dispatch(setPageNumber(1));
    }
    //request to fetch quote
    dispatch(fetchAnimeQuoteRequest());
    //in case anime and page is not set, uri fetches random quote
    axios
      .get(`https://animechan.vercel.app/api/quotes${uri}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAnimeQuoteSuccess(data));
        //if data is fetched successfully
      })
      .catch((err) => {
        dispatch(fetchAnimeQuoteFailure(err.message));
        //if error is encountered
      });
  };
};
