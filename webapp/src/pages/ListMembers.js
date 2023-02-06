import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Member from "../components/Member";
import { fetchAllMembers } from "../apis/Api";

function ListMembers() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const fetchApi = async () => {
    const response = await fetchAllMembers();
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
        <Member member={member} />
      ))}
    </Container>
  );
}

export default ListMembers;
