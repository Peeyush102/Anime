import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormControl } from "react-bootstrap";
import ShowSearchResults from "./ShowSearchResults";
import "./Search.css";

function Search() {
  const data = useSelector((state) => state.nameFetchReducer);
  const [searchValue, setSearchValue] = useState("");
  const [resultArray, setresultArray] = useState([]);
  useEffect(() => {
    let newArrayResult = searchValue
      ? data.names.filter((name) => {
          return name.toLowerCase().includes(searchValue.toLocaleLowerCase());
        })
      : [];
    if (newArrayResult) setresultArray(() => newArrayResult);
  }, [searchValue]);
  const handleChange = (fieldValue) => {
    setSearchValue(() => fieldValue);
  };
  return (
    <div className="Search">
      <FormControl
        type="search"
        placeholder="Search your favourite Anime"
        className="mr-2"
        aria-label="Search"
        onChange={(e) => handleChange(e.target.value)}
        value={searchValue.value}
      />
      <>
        <ShowSearchResults
          datas={[...resultArray]}
          clearSearch={setSearchValue}
        />
      </>
    </div>
  );
}

export default Search;
