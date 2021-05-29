import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
//import { SidebarData } from "./SidebarData";
import "./newSide.css";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./../../redux";
import Loading from "../LoadingComponent/loading";

function NewNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const data = useSelector((state) => state.nameFetchReducer);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNames());
  }, [dispatch]);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          {data.loading === true ? (
            <Loading />
          ) : (
            data.names.map((item, index) => {
              return (
                <li key={index} className="nav-text">
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
  );
}

export default NewNavbar;
