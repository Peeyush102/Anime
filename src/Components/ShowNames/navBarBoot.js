import React, { useEffect } from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import "./navBarBoot.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames, showList } from "./../../redux";
import Loading from "../LoadingComponent/loading";
import Search from "../SearchComponent/Search";

function NavbarBoot() {
  const data = useSelector((state) => state.nameFetchReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNames());
  }, [dispatch]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu"}>
          <ul className="nav-menu-items menu1">
            <li className="navbarboot-toggle">
              <h1>
                <FaIcons.FaDrupal />
              </h1>
              <div className="TitleAll">Anime Quotes {data.loading}</div>
              <FaIcons.FaBars
                className="burgerButton"
                onClick={() => dispatch(showList())}
              />
            </li>
          </ul>
          <ul className="nav-menu-items menu1">
            <Search />
          </ul>
          <ul
            className={
              !data.visible ? "nav-menu-items menu2" : "nav-menu-items"
            }
          >
            {data.loading === true ? (
              <Loading />
            ) : (
              data.names.map((item, index) => {
                return (
                  <li
                    onClick={() => dispatch(showList())}
                    key={index}
                    className="nav-text"
                  >
                    <Link to={`/?name=${item}&page=1`}>
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarBoot;
