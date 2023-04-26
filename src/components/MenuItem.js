import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Zoom } from "react-reveal";

const MenuItem = ({ menuItems }) => {
  return (
    <Col sm={12} className="my-3">
      {menuItems.length
        ? menuItems.map((item) => {
            return (
              <Zoom left>
                <Card key={item.id} className="d-flex flex-row my-3">
                  <Card.Img
                    variant="top"
                    src={item.imgUrl}
                    style={{ width: "250px" }}
                  />
                  <Card.Body>
                    <Row className="justify-content-center">
                      <Col>
                        <Card.Title>{item.title}</Card.Title>
                      </Col>
                      <Col className="text-end">
                        <p className="text-danger">{item.price}</p>
                      </Col>
                    </Row>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Zoom>
            );
          })
        : null}
    </Col>
  );
};

export default MenuItem;
