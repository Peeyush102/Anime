import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./pagination.css";

/**
 * Displays pagination from animeQuote redux state page values
 */
function Pagination() {
  const history = useHistory();
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  //fetching data from animeQuote state from redux store
  return (
    <div className="Pagination">
      <Button
        disabled={quoteData.page === 1 || quoteData.loading}
        //disabling button while loading and at 1st page
        onClick={() => {
          history.push(`/?name=${quoteData.name}&page=${quoteData.page - 1}`);
          // new url is set by decreasing page by 1
        }}
      >
        Back
      </Button>
      <span className="PaginationSpan">{quoteData.page}</span>
      {/*Dispaying current page number */}
      <Button
        disabled={quoteData.quotes.length < 10 || quoteData.loading}
        //diabling button if data fetched is less than 10(default value) or while the data is loading
        onClick={() => {
          history.push(`/?name=${quoteData.name}&page=${quoteData.page - -1}`);
          //new url is set by increasing page by 1
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default withRouter(Pagination);
