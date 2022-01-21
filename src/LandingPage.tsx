import React from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";

const LandingPage = () => {
  return (
    <Row>
      <Col lg={12}><Welcome></Welcome></Col>
      <Col lg={6} md={12} sm={12}></Col>
      <Col lg={6} md={12} sm={12}></Col>
    </Row>
  );
};

export default LandingPage;
