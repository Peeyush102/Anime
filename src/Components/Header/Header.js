import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const quoteData = useSelector((state) => state.animeQuoteReducer);
  //displays the name of anime in header. Fetches the data from animeQuote state.
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="TitleAll">
          {quoteData.name ? quoteData.name.toUpperCase() : "Quotes of the Day"}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Header;
