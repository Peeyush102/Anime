import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import "./navBarBoot.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./../../redux";

function NavbarBoot() {
  const [sidebar, setSidebar] = useState(false);
  const data = useSelector((state) => state.nameFetchReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNames());
  }, [dispatch]);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbarboot">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbarboot-toggle">
              {showSidebar && (
                <div className={sidebar ? "menu-bars" : "noneDisplay"}>
                  <AiIcons.AiOutlineClose />
                </div>
              )}
            </li>
            {data.names.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                  <Link to={`/?name=${item}&page=1`}>
                    <span>{item}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarBoot;
