import React from "react";
import { Row, Col } from "react-bootstrap";

export const Datescunt = ({ person }) => {
  return (
    <Row className=" justify-content-center">
      <Col sm="8">you have {person.length} dates</Col>
    </Row>
  );
};
