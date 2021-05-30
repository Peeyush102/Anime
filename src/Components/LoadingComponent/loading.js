import React from "react";
import Spinner from "react-bootstrap/Spinner";
/*
A dummy component to show loading 
 */
function Loading() {
  return (
    <div className="Laoding">
      <Spinner animation="border" />
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
