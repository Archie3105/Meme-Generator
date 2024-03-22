import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <div className="meme-card m-3 justify-center flex m-auto mt-2 rounded-xl">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="p-1 rounded-xl" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="justify-center flex">{props.title}</Card.Title>
          <Button
            className="bg-orange-500 justify-center flex m-auto"
            variant="primary"
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MemeCard;
