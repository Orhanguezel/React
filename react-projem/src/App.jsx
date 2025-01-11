import React, { useState, useEffect } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(""); // Selected category
  const [products, setProducts] = useState([]); // List of products

  // Fetch products from the API
  useEffect(() => {
    getProducts();
  }, []); // Run once when the component mounts

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName); // Update selected category
    getProducts(category.id); // Fetch products for the selected category
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data)); // Update products state
  };

  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };

  return (
    <div>
      <Container>
        {/* Navigation */}
        <Row>
          <Col>
            <Navi />
          </Col>
        </Row>

        {/* Category and Product Lists */}
        <Row>
          <Col xs="3">
            <CategoryList
              currentCategory={currentCategory} // Props olarak seçilen kategori gönderildi
              changeCategory={changeCategory} // Props olarak kategori değiştirme fonksiyonu gönderildi
              info={categoryInfo} // Props olarak kategori bilgisi gönderildi
            />
          </Col>
          <Col xs="9">
            <ProductList
              products={products} // Props olarak ürünler gönderildi
              currentCategory={currentCategory} // Props olarak seçilen kategori gönderildi
              info={productInfo} // Props olarak ürün bilgisi gönderildi
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
