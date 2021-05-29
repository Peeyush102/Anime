import React from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";

function ShowSearchResults({ datas, clearSearch }) {
  const history = useHistory();
  const handleOnClick = (data) => {
    clearSearch(``);
    history.push(`/?name=${data}&page=1`);
  };
  return (
    <div className="ResultDiv">
      {datas.map((data) => {
        return <div onClick={() => handleOnClick(data)}>{data}</div>;
      })}
    </div>
  );
}

export default ShowSearchResults;
