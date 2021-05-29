import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./pagination.css";

function Pagination() {
  const history = useHistory();
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  return (
    // <>{console.log(quoteData)}</>
    <div className="Pagination">
      <Button
        disabled={quoteData.page === 1}
        onClick={() => {
          history.push(`/?name=${quoteData.name}&page=${quoteData.page - 1}`);
        }}
      >
        Back
      </Button>
      <span className="PaginationSpan">{quoteData.page}</span>
      <Button
        onClick={() => {
          history.push(`/?name=${quoteData.name}&page=${quoteData.page - -1}`);
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default withRouter(Pagination);
