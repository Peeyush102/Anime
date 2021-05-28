import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import QuoteCard from "../Cards/quoteCard";
import { fetchRandomQuotes } from "../../redux";
import "./showSpecificQuotes.css";

function ShowSpecificQuotes({ location }) {
  const dispatch = useDispatch();
  const dataV = useSelector((state) => state.animeQuoteReducer);
  const [namePage, setNamePage] = useState({
    name: "",
    page: 1,
  });
  const history = useHistory();
  useEffect(() => {
    let data = new URLSearchParams(location.search).get("name");
    let page = new URLSearchParams(location.search).get("page");
    if (data !== undefined && data !== null) {
      if (data.length === 0) {
        history.push(`/`);
      }
      if (page <= 0 || page === undefined || page === null) {
        history.push(`/?name=${data}&page=1`);
      }
      setNamePage(() => ({
        name: data,
        page: page,
      }));
      dispatch(fetchRandomQuotes(page, data));
    } else if (data === undefined || data === null) {
      setNamePage({
        name: "",
        page: 1,
      });
      dispatch(fetchRandomQuotes());
      //history.push(`/`);
    }
  }, [location, history, dispatch]);
  return (
    <div className="quotes">
      {dataV.loading ? (
        <>Loading...</>
      ) : dataV.error ? (
        <>Error loading data</>
      ) : (
        <>
          {namePage.name}
          {dataV.quotes.map((quote, index) => (
            <QuoteCard key={index} props={quote} />
          ))}
          {namePage.name !== `` && (
            <button
              disabled={dataV.quotes.length < 10}
              onClick={() => {
                history.push(
                  `/?name=${namePage.name}&page=${namePage.page - -1}`
                );
              }}
            >
              next
            </button>
          )}
          {namePage.name !== `` && namePage.page}
          {namePage.name !== `` && (
            <button
              disabled={namePage.page == 1}
              onClick={() => {
                history.push(
                  `/?name=${namePage.name}&page=${namePage.page - 1}`
                );
              }}
            >
              back
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default withRouter(ShowSpecificQuotes);
