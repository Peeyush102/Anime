import React from "react";
// import Pagination from "./../Pagination/pagination";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="TitleAll">
          {quoteData.name
            ? quoteData.name.toUpperCase()
            : "Quotes of the Day Quotes of the Day Quotes of the Day Quotes of the Day Quotes of the Day"}
        </div>
        {/* <Pagination /> */}
        <hr />
      </div>
    </div>
  );
}

export default Header;
