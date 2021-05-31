import React from "react";
import Search from "../SearchComponent/Search";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Headings({ showListFunction }) {
  return (
    <ul className="nav-menu-items menu1">
      <li className="navbarboot-toggle">
        <div className="title-all drupleIco">
          <Link to={`/`}>
            {/* redirects to home on clicking this icon*/}
            <FaIcons.FaDrupal />
          </Link>
        </div>
        <div className="title-all">Anime Quotes</div>
      </li>
      <Search />
      <li className="navbarboot-toggle">
        <h2 className="nav-h2">All Animes</h2>
        {/* showList() functions toggles the visible property of showName state. visible property enables displaying and hiding of all the anime names.   */}
        {/* Please not that this button only functions in mobile view and is hidden in desktop view( done via css of downArrow class). */}
        <AiIcons.AiFillCaretDown
          className="downArrow"
          onClick={() => showListFunction()}
        />
      </li>
    </ul>
  );
}

export default Headings;
