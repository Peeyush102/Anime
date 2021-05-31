import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import QuoteCard from "../Cards/QuoteCard";
import { fetchQuotes } from "../../redux";
import Loading from "../LoadingComponent/loading";
import Error from "../ErrorComponent/error";
import "./ShowQuotes.css";

/*
  This function renders all the quotes based on values retrived from url
  Flow ->
  Name and Page Number is fetched from url.
  Name and Page are updated in animeQuote state, and subsiquently quotes are fetched from the API
  Once the quotes are fetched, they are rendered here.
  This also triggers changes in Header(Displays name of anime) and Footer(Displays Pagination) Component present in App component
 */

function ShowQuotes({ location }) {
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  //fetching animeQuote state
  /*
animeQuote state definition : {
  loading : boolean,
  quotes : Array of strings
  page : number,
  name : string,
  error : string
}
 */
  const history = useHistory();
  useEffect(() => {
    let nameOfAnime = new URLSearchParams(location.search).get("name");
    let page = new URLSearchParams(location.search).get("page");
    if (nameOfAnime) {
      //handling cases for name and page
      page = parseInt(page);
      if (!page || typeof page !== "number" || page < 0) {
        history.push(`/?name=${nameOfAnime}&page=1`);
        // page should be number
      }
      dispatch(fetchQuotes(page, nameOfAnime));
    } else if (location.search) {
      history.push(`/`);
      //if name is not present, redirect to home
    } else {
      dispatch(fetchQuotes());
      //any other condition if encountered, random quotes are fetched
    }
  }, [location, history, dispatch]);
  return (
    //rendering on basis of loading, error and success conditions
    <div className="quotes">
      {quoteData.loading ? (
        <Loading />
      ) : quoteData.error ? (
        <Error error={quoteData.error} />
      ) : (
        <div>
          {quoteData.quotes.map((quote, index) => (
            <QuoteCard key={index} props={quote} />
            //QuoteCard renders each quote
          ))}
        </div>
      )}
    </div>
  );
}

export default withRouter(ShowQuotes);
