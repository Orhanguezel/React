# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

src/
  components/
    atoms/
      Button.jsx
      Input.jsx
    molecules/
      Navbar.jsx
      ProductCard.jsx
    organisms/
      ProductList.jsx
      CartList.jsx
    layout/
      Layout.jsx
  context/
    ThemeContext.js
    CartContext.js
  hooks/
    useFetch.js
  pages/
    Home.jsx
    Products.jsx
    Cart.jsx
    NotFound.jsx
  styles/
    GlobalStyles.js
  utils/
    axiosInstance.js


json-server --watch db.json
