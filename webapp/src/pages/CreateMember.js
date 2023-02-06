import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchCreateMember } from "../apis/Api";

function CreateMember() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("REG");
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const member = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      role: role,
    };

    const fetchApi = async () => {
      const response = await fetchCreateMember(member);
      if (response.status >= 200 && response.status < 400) {
        navigate("/");
      } else if (response.status === 400) {
        const data = await response.json();
        setAlertInfo(data);
        setShowAlert(true);
      } else {
        navigate("/error");
      }
    };

    fetchApi();
  };

  return (
    <Container>
      <div className="text-center">
        <h1 className="mb-3">Add a team member</h1>
        <text>Set name, email, phone and role.</text>
      </div>
      <hr />
      <Form>
        <Form.Label style={{ fontWeight: "bold" }}>Info</Form.Label>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={
            showAlert && alertInfo != null && alertInfo.first_name !== undefined
          }
          key="warning"
          variant="warning"
        >
          {alertInfo == null ? "" : alertInfo.first_name}
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={
            showAlert && alertInfo != null && alertInfo.last_name !== undefined
          }
          key="warning"
          variant="warning"
        >
          {alertInfo == null ? "" : alertInfo.last_name}
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={showAlert && alertInfo != null && alertInfo.email !== undefined}
          key="warning"
          variant="warning"
        >
          {alertInfo == null ? "" : alertInfo.email}
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={showAlert && alertInfo != null && alertInfo.phone !== undefined}
          key="warning"
          variant="warning"
        >
          {alertInfo == null ? "" : alertInfo.phone}
        </Alert>

        <hr />
        <Form.Label style={{ fontWeight: "bold" }}>Role</Form.Label>
        <div key={`role-selections`} className="mb-3">
          <Form.Check
            type={"radio"}
            id={`default-radio`}
            name={"role-radio"}
            value={"REG"}
            label={`Regular - Can't delete members`}
            defaultChecked
            onClick={(e) => setRole(e.target.value)}
          />
          <Form.Check
            type={"radio"}
            id={`admin-radio`}
            name={"role-radio"}
            value={"ADM"}
            label={`Admin - Can delete members`}
            onClick={(e) => setRole(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="primary"
            type="submit"
            align="right"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateMember;
