import React, { useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//using react icons library for icons
import { Link } from "react-router-dom";

import "./navBarBoot.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames, showList } from "./../../redux";
import Loading from "../LoadingComponent/loading";
import Search from "../SearchComponent/Search";
import Error from "./../ErrorComponent/error";

/* 
This component represents the side NavBar(in Desktop) or the top NavBar(in Mobile). 
Since it is outside Switch Tag, it will be available throughout the website. 
Even on 404 Page
*/

function NavbarBoot() {
  const data = useSelector((state) => state.nameFetchReducer);
  //using redux store nameFetchReducer to get Anime Names state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNames());
    //calling fetchNames function which populates names in nameFetch state when the component loades initially.
  }, [dispatch]);

  return (
    //icon context provider provides same color to all the react icons used in this component
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="nav-menu">
        <ul className="nav-menu-items menu1">
          <li className="navbarboot-toggle">
            <div className="TitleAll drupleIco">
              <Link to={`/`}>
                {/* redirects to home on clicking this icon*/}
                <FaIcons.FaDrupal />
              </Link>
            </div>
            <div className="TitleAll">Anime Quotes</div>
          </li>
          <Search />
          <li className="navbarboot-toggle">
            <div> Or </div>
            <div>See List of Animes</div>
            {/* showList() functions toggles the visible property of showName state. visible property enables displaying and hiding of all the anime names.   */}
            {/* Please not that this button only functions in mobile view and is hidden in desktop view( done via css of burgerButton class). */}
            <AiIcons.AiFillCaretDown
              className="burgerButton"
              onClick={() => dispatch(showList())}
            />
          </li>
        </ul>
        <ul
          className={!data.visible ? "nav-menu-items menu2" : "nav-menu-items"}
        >
          {/* Based on visible property of nameState, visibility of list can be changed, This changes are seen in mobile view */}
          {data.loading === true ? (
            /* loading property is set when data is being called asynchronously. While the data is being fetched user can be shown a Loading component */
            <li className="navbarboot-toggle">
              <Loading />
            </li>
          ) : data.error ? (
            /*If any error is encountered during api call, error component is rendered  */
            <li className="navbarboot-toggle">
              <Error error={data.error} />
              <div
                onClick={() => {
                  dispatch(fetchNames());
                }}
              >
                {" "}
                Reload Names{" "}
              </div>
            </li>
          ) : (
            data.names.map((item, index) => {
              /*Once the names are populated, loading will be set as false and names will be rendered from array  */
              return (
                <li
                  /* showList() will set visible to false( its true currently that's why we are able to see list elements), this stops displaying list on selection of one name */
                  onClick={() => dispatch(showList(false))}
                  key={index}
                  className="nav-text"
                >
                  <Link to={`/?name=${item}&page=1`}>
                    {/*This redirects the user to the name specific url, where quotes will be fetched based on name in the url*/}
                    <span>{item}</span>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default NavbarBoot;
