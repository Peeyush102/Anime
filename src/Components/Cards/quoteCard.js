import React from "react";
import Card from "react-bootstrap/Card";

function QuoteCard(props) {
  return (
    <Card key={props.props.quote} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.props.anime}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.props.character}
        </Card.Subtitle>
        <Card.Text>{props.props.quote}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
