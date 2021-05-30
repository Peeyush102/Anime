import React from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showList } from "./../../redux";

function ShowSearchResults({ datas, clearSearch }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleOnClick = (data) => {
    clearSearch(() => ``);
    if (typeof data === "string") {
      history.push(`/?name=${data}&page=1`);
    }
  };
  return (
    <div className="ResultDiv ">
      {datas.map((data) => {
        return (
          <div
            className="nav-text"
            key={data}
            onClick={() => dispatch(showList(false))}
          >
            <div onClick={() => handleOnClick(data)} className="Search-link">
              {data}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowSearchResults;
