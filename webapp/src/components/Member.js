import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Member({ member }) {
  const navigate = useNavigate();

  return (
    <Row
      className="align-items-center"
      onClick={() => navigate(`/update/${member.id}`)}
    >
      <Col xs={2} className="align-items-center-center">
        <BsFillPersonFill size={40} />
      </Col>
      <Col className="align-items-center-center">
        <Card className="mb-3 card-horizontal">
          <Card.Body>
            <Card.Title>{`${member.first_name} ${member.last_name} ${
              member.role === "Admin" ? "(Admin)" : ""
            }`}</Card.Title>
            <Card.Text className="mb-0 text-muted">{member.phone}</Card.Text>
            <Card.Text className="mb-0 text-muted">{member.email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <hr />
    </Row>
  );
}

export default Member;
