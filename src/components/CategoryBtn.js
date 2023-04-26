import React from "react";
import { Button, Col } from "react-bootstrap";

const CategoryBtn = ({ categories, filterByCategory }) => {
  const onFilter = (category) => {
    filterByCategory(category);
  };
  return (
    <Col className="m-auto text-center d-flex justify-content-center">
      {categories.length
        ? categories.map((cat) => {
            return (
              <Button
                key={Math.random()}
                className="m-3 mb-5"
                variant="outline-secondary"
                onClick={() => onFilter(cat)}
              >
                {cat}
              </Button>
            );
          })
        : null}
    </Col>
  );
};

export default CategoryBtn;
