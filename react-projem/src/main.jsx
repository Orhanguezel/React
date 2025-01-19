import ReactDOM from "react-dom/client";
import App from "./App"; // App bileşeni
import "./styles/style.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.css";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter burada tanımlı

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
