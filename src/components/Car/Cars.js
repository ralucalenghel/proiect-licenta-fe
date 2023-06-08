import React from "react";
import { Row } from "react-bootstrap";
import Car from "./Car";

const Cars = (props) => {
  const list = props.carList.map((x, key) => {
    return <Car serviceId={props.serviceId} key={key} car={x} />;
  });

  return (
    <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} className="g-4">
      <>{list}</>
    </Row>
  );
};

export default Cars;
