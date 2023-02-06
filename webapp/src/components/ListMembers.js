import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsFillPersonFill, BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ListMembers() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const fetchApi = async (requestOptions) => {
    const response = await fetch("/api/member", requestOptions);
    if (response.status >= 200 && response.status < 400) {
      const data = await response.json();
      setMembers(data);
    } else {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchApi(requestOptions);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <h1 className="mb-3">Team members</h1>
            <text>You have {members.length} team members.</text>
          </div>
          <hr />
        </Col>
        <Col xs={1}>
          <BsPlus
            size={60}
            color={"blue"}
            onClick={() => navigate("/create")}
          />
        </Col>
      </Row>

      {members.map((member) => (
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
                  member.role == "Admin" ? "(Admin)" : ""
                }`}</Card.Title>
                <Card.Text className="mb-0 text-muted">
                  {member.phone}
                </Card.Text>
                <Card.Text className="mb-0 text-muted">
                  {member.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <hr />
        </Row>
      ))}
    </Container>
  );
}

export default ListMembers;
