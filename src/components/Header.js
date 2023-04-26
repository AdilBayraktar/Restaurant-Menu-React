import React, { useState } from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";

const Header = ({ filterBySearch }) => {
  const [serachValue, setserachValue] = useState("");
  const onFilter = (name) => {
    filterBySearch(name);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Restaurant Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setserachValue(e.target.value)}
              // onKeyUp={() => onFilter(serachValue)}
            />
            <Button
              variant="outline-success"
              onClick={() => onFilter(serachValue)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
