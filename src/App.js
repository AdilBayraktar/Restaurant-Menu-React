import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryBtn from "./components/CategoryBtn";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import { items } from "./data/Data";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const filterByCategory = (category) => {
    if (category === "All") {
      setMenuItems(items);
    } else {
      const filteredArray = items.filter((item) => item.category === category);
      setMenuItems(filteredArray);
    }
  };

  const filterBySearch = (name) => {
    if (name !== "") {
      const searchArray = items.filter((item) => item.title === name);
      setMenuItems(searchArray);
    } else {
      setMenuItems(items);
    }
  };

  return (
    <div>
      <Header filterBySearch={filterBySearch} />
      <Container>
        <h1 className="text-center my-3">Food Menu</h1>
        <div className="line" />
        <Row className="justify-content-center">
          <CategoryBtn
            filterByCategory={filterByCategory}
            categories={categories}
          />
        </Row>
        <Row>
          <MenuItem menuItems={menuItems} />
        </Row>
      </Container>
    </div>
  );
};

export default App;
