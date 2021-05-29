import React, { useState, useEffect } from "react";
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
  const [namePage, setNamePage] = useState({
    name: "",
    page: 1,
  });
  useEffect(() => {
    let data = new URLSearchParams(location.search).get("name");
    let page = new URLSearchParams(location.search).get("page");
    if (location.search.length !== 0 && (data === undefined || data === null)) {
      history.push("/");
    } else if (data !== undefined && data !== null) {
      if (data.length === 0) {
        history.push(`/`);
      }
      if (page <= 0 || page === undefined || page === null) {
        history.push(`/?name=${data}&page=1`);
      }
      page = parseInt(page);
      setNamePage(() => ({
        name: data,
        page: page,
      }));
      dispatch(fetchQuotes(page, data));
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
          <h1>{namePage.name}</h1>
          {quoteData.quotes.map((quote, index) => (
            <QuoteCard key={index} props={quote} />
          ))}
          {namePage.name !== "" && <Pagination namePage={namePage} />}
        </div>
      )}
    </div>
  );
}

export default withRouter(ShowQuotes);
