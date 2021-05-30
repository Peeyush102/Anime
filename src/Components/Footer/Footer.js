import React from "react";
import Pagination from "./../Pagination/pagination";
import "./Footer.css";

function Footer() {
  //footer contains pagination component
  return (
    <div className="Footer">
      <div className="Footer-Container">
        <Pagination />
      </div>
    </div>
  );
}

export default Footer;
