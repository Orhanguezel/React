import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function CategoryList(props) {
  const [categories, setCategories] = useState([]); // State for categories

  // Fetch categories from the API on component mount
  useEffect(() => {
    getCategories();
  }, []); // Empty dependency array means this runs once when the component mounts

  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  return (
    <div>
      <h3>{props.info.title}</h3>
      <ListGroup>
        {categories.map((category) => (
          <ListGroupItem
            active={category.categoryName === props.currentCategory} // Highlight the selected category
            key={category.id} // Use category's id as the key
            onClick={() => props.changeCategory(category)}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}



