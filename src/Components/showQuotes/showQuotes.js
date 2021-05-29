import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import QuoteCard from "../Cards/quoteCard";
import { fetchQuotes } from "../../redux";
import Pagination from "./../Pagination/pagination";
import Loading from "../LoadingComponent/loading";
import Error from "./../ErrorComponent/error";
import "./showQuotes.css";

function ShowQuotes({ location }) {
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  const history = useHistory();
  useEffect(() => {
    let nameOfAnime = new URLSearchParams(location.search).get("name");
    let page = new URLSearchParams(location.search).get("page");
    if (nameOfAnime) {
      page = parseInt(page);
      if (!page || typeof page !== "number" || page < 0)
        history.push(`/?name=${nameOfAnime}&page=1`);
      dispatch(fetchQuotes(page, nameOfAnime));
    } else if (location.search) {
      history.push(`/`);
    } else {
      dispatch(fetchQuotes());
    }
  }, [location, history, dispatch]);
  return (
    <div className="quotes">
      {quoteData.loading ? (
        <Loading />
      ) : quoteData.error ? (
        <Error error={quoteData.error} />
      ) : (
        <div>
          {quoteData.quotes.map((quote, index) => (
            <QuoteCard key={index} props={quote} />
          ))}
        </div>
      )}
    </div>
  );
}

export default withRouter(ShowQuotes);
