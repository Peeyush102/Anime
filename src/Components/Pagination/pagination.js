import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import "./pagination.css";

function Pagination(props) {
  const history = useHistory();
  return (
    // <>{console.log(props.namePage)}</>
    <div>
      <Button
        disabled={props.namePage.page === 1}
        onClick={() => {
          history.push(
            `/?name=${props.namePage.name}&page=${props.namePage.page - 1}`
          );
        }}
      >
        Back
      </Button>
      <span className="PaginationSpan">{props.namePage.page}</span>
      <Button
        onClick={() => {
          history.push(
            `/?name=${props.namePage.name}&page=${props.namePage.page - -1}`
          );
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default withRouter(Pagination);
