import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteCard from "../Cards/quoteCard";
import { fetchRandomQuotes } from "./../../redux";

function ShowQuotes() {
  const state = useSelector((state) => state.animeQuoteReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomQuotes());
  }, []);
  return state.loading ? (
    <>Loading</>
  ) : (
    <div>
      <div>
        {state.quotes.map((quote, index) => (
          <QuoteCard key={index} props={quote} />
        ))}
      </div>
    </div>
  );
}

export default ShowQuotes;
