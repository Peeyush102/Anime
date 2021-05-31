import React, { useEffect } from "react";
//using react icons library for icons
import { Link } from "react-router-dom";

import "./ShowNames.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames, showList } from "../../redux";
import Loading from "../LoadingComponent/loading";
import Error from "../ErrorComponent/error";
import Headings from "./Headings";

/* 
This component represents the side NavBar(in Desktop) or the top NavBar(in Mobile). 
Since it is outside Switch Tag, it will be available throughout the website. 
Even on 404 Page
*/

function ShowNames() {
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
        <Headings showListFunction={() => dispatch(showList())} />
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

export default ShowNames;
