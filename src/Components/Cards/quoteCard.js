import React from "react";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as AiIcons from "react-icons/ai";

import "./quoteCards.css";

function QuoteCard({ props }) {
  const copyQuote = (quote) => {
    alert(quote);
    navigator.clipboard.writeText(quote);
  };
  return (
    <Card className="card-Changes" key={props.quote} style={{ width: "70vw" }}>
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
