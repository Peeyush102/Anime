import React from "react";
import Pagination from "./../Pagination/pagination";
// import { useSelector } from "react-redux";
import "./Footer.css";

function Footer() {
  //const quoteData = useSelector((state) => state.animeQuoteReducer);
  return (
    <div className="Footer">
      <div className="Footer-Container">
        {/* <hr /> */}
        <Pagination />
      </div>
    </div>
  );
}

export default Footer;
