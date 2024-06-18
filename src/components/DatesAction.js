import React from 'react'
import { Button, Col,  Row } from "react-bootstrap";


export const DatesAction = ({ daletP,show }) => {
  return (
    <Row className=" justify-content-center mt-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={daletP}>delet all</Button>
        <Button onClick={show}>show</Button>
      </Col>
    </Row>
  );
};
