import React from "react";
import { Col, Row } from "react-bootstrap";

export const Dateslist = ({ person }) => {
  return (
    <Row className=" justify-content-center mt-2">
      <Col sm="8">
        <div className="rectangle  p-3">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className=" d-flex border-bottom mx-3 my-3 ">
                  <img className="img-avatar" src={item.img} alt="" />{" "}
                  <div className="mx-3">
                    <p className=" d-inline fs-5 ">{item.name}</p>
                    <p className=" fs-6 ">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center">not find dates</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
