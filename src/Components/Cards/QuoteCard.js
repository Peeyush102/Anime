import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as AiIcons from "react-icons/ai";
import "./QuoteCards.css";

function QuoteCard({ props }) {
  const [disable, setDisable] = useState(false);
  //using disable to disable copy quote functionality for 2 seconds
  useEffect(() => {
    const timeOut = setTimeout(() => setDisable(() => false), 2000);
    return () => clearTimeout(timeOut);
  }, [disable]);
  const copyQuote = (quote) => {
    // logic to copy quote in clipboard
    if (!disable)
      try {
        navigator.clipboard.writeText(quote);
        setDisable(() => true);
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
            active={disable}
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
