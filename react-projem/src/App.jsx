import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import NotFound from "./components/NotFound";
import "./styles/index.css";
import alertify from "alertifyjs";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(""); // Seçilen kategori
  const [products, setProducts] = useState([]); // Ürün listesi
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate(); // Yönlendirme için kullanılır

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Sepeti localStorage'a kaydet
  }, [cart]);

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("API error:", error));
  };

  const addToCart = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.product.id === product.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(`${product.productName} başarıyla sepete eklendi!`, 2);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
    alertify.error(`${product.productName} sepetten silindi!`);
  };

  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Navi
          cart={cart}
          removeFromCart={removeFromCart}
          goToCart={() => navigate("/cart")}
          goToHome={() => navigate("/")}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CategoryList
            currentCategory={currentCategory}
            changeCategory={changeCategory}
            info={categoryInfo}
          />
        </div>
        <div className="lg:col-span-3">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  products={products}
                  currentCategory={currentCategory}
                  info={productInfo}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={<CartList cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
