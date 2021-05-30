import React from "react";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as AiIcons from "react-icons/ai";

import "./quoteCards.css";

function QuoteCard({ props }) {
  const copyQuote = (quote) => {
    // logic to copy quote in clipboard
    try {
      navigator.clipboard.writeText(quote);
    } catch (e) {
      //if any error is encountered an alert is displayed
      alert("Error in copying!!");
    }
  };
  return (
    //card rendered on basis of each quote object recieved as props
    <Card className="card-Changes" key={props.quote}>
      <Card.Body>
        <Card.Title>{props.anime}</Card.Title>
        <Card.Text>{props.quote}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          -{props.character}
        </Card.Subtitle>
        <Breadcrumb className="breadCrum-Changes">
          <Breadcrumb.Item
            onClick={() => {
              copyQuote(props.quote);
            }}
          >
            COPY QUOTE <AiIcons.AiOutlineCopy />{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
