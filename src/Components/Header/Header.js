import React from "react";
import Pagination from "./../Pagination/pagination";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  return (
    <div className="Header">
      <div className="Header-container">
        <h1>{quoteData.name}</h1>
        {/* <Pagination /> */}
        <hr />
      </div>
    </div>
  );
}

export default Header;
