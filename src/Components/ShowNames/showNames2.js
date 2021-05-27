import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./../../redux";
import { useHistory } from "react-router-dom";

function ShowNames2() {
  const data = useSelector((state) => state.nameFetchReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchNames());
  }, []);
  return data.loading ? (
    <div>Loading...</div>
  ) : data.error ? (
    <div>Error</div>
  ) : (
    <div>
      <div>
        {data.names.map((name) => (
          <li
            onClick={() => history.push(`/anime/?name=${name}page=1`)}
            key={name}
          >
            {name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ShowNames2;
