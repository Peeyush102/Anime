import axios from "axios";
import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS,
  FETCH_NAMES_FAILURE,
  SHOW_LIST,
} from "./nameFetchTypes";

export const fetchNamesRequest = () => {
  return {
    type: FETCH_NAMES_REQUEST,
  };
};

export const fetchNamesSuccess = (names) => {
  return {
    type: FETCH_NAMES_SUCCESS,
    payload: names,
  };
};

export const fetchNamesFailure = (error) => {
  return {
    type: FETCH_NAMES_FAILURE,
    payload: error,
  };
};
export const showList = (boolVal) => {
  return {
    type: SHOW_LIST,
    payload: boolVal,
  };
};
export const fetchNames = () => {
  return (dispatch) => {
    dispatch(fetchNamesRequest());
    axios
      .get(`https://animechan.vercel.app/api/available/anime`)
      .then((response) => {
        const names = response.data;
        dispatch(fetchNamesSuccess(names));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(fetchNamesFailure(err));
      });
  };
};
