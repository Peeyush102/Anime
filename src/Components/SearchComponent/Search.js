import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormControl } from "react-bootstrap";
import ShowSearchResults from "./ShowSearchResults";
import "./Search.css";

function Search() {
  const data = useSelector((state) => state.nameFetchReducer);
  //getting names from anime Name store
  const [searchValue, setSearchValue] = useState(""); //value to be searched for
  const [resultArray, setresultArray] = useState([]); //Array containing filtered results
  useEffect(() => {
    //checking if search result contains data
    let newArrayResult = searchValue
      ? data.names.filter((name) => {
          return name.toLowerCase().includes(searchValue.toLocaleLowerCase());
        })
      : [];
    if (newArrayResult) setresultArray(() => newArrayResult);
  }, [searchValue, data.names]);
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
        value={searchValue}
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
