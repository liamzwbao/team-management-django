import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchDeleteMember,
  fetchMemberById,
  fetchUpdateMember,
} from "../apis/Api";

function UpdateMember() {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("REG");
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});

  useEffect(() => {
    const fetchMemberApi = async (memberId) => {
      const response = await fetchMemberById(memberId);
      if (response.status >= 200 && response.status < 400) {
        const data = await response.json();
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setPhone(data.phone);
        setRole(data.role);
      } else {
        navigate("/error");
      }
    };

    fetchMemberApi(memberId);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const member = {
      id: memberId,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      role: role,
    };
    const fetchUpdateApi = async (member) => {
      const response = await fetchUpdateMember(member);
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

    fetchUpdateApi(member);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const fetchDeleteApi = async (memberId) => {
      const response = await fetchDeleteMember(memberId);
      if (response.status >= 200 && response.status < 400) {
        navigate("/");
      } else {
        navigate("/error");
      }
    };

    fetchDeleteApi(memberId);
  };

  return (
    <Container>
      <div className="text-center">
        <h1 className="mb-3">Edit team member</h1>
        <text>Edit name, email, phone and role.</text>
      </div>
      <hr />
      <Form>
        <Form.Label style={{ fontWeight: "bold" }}>Info</Form.Label>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={
            showAlert && alertInfo != null && alertInfo.first_name != undefined
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={
            showAlert && alertInfo != null && alertInfo.last_name != undefined
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={showAlert && alertInfo != null && alertInfo.email != undefined}
          key="warning"
          variant="warning"
        >
          {alertInfo == null ? "" : alertInfo.email}
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Alert
          show={showAlert && alertInfo != null && alertInfo.phone != undefined}
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
            checked={role === "REG"}
            onClick={(e) => setRole(e.target.value)}
          />
          <Form.Check
            type={"radio"}
            id={`admin-radio`}
            name={"role-radio"}
            value={"ADM"}
            label={`Admin - Can delete members`}
            checked={role === "ADM"}
            onClick={(e) => setRole(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="danger"
            type="submit"
            align="left"
            onClick={handleDelete}
          >
            Delete
          </Button>

          <Button
            variant="primary"
            type="submit"
            align="right"
            onClick={handleUpdate}
          >
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default UpdateMember;
