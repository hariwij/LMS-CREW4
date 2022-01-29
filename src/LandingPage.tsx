import React from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const LandingPage = () => {
  return (
    <Row>
      <Col lg={12}><Welcome></Welcome></Col>
      <Col lg={6} md={12} sm={12}><BookList /></Col>
      <Col lg={6} md={12} sm={12}><AuthorList/></Col>
      <Col lg={6} md={12} sm={12}><BookForm/></Col>
    </Row>
  );
};

export default LandingPage;
