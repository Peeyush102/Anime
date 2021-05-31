import React from "react";
import "./ErrorPage.css";
/*
This is 404 page, when user went to a non-existing route in website
*/
function ErrorPage() {
  return (
    <div className="Error404">
      <h1>404</h1>
      <h1>Cannot find the page!!</h1>
    </div>
  );
}

export default ErrorPage;
