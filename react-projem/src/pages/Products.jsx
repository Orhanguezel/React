import { useOutletContext } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ProductListContainer } from "../styles/ProductsStyles";
import ProductCard from "../components/molecules/ProductCard";

export default function Products() {
  console.log("Products page rendered!"); // Çalışıp çalışmadığını kontrol etmek için log
  const { currentCategory } = useOutletContext();
  console.log("Current Category in Products:", currentCategory); // Kategori kontrolü

  const endpoint = currentCategory
    ? `/products?categoryId=${currentCategory}`
    : "/products";

  const { data: products, loading, error } = useFetch(endpoint);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  if (!products || products.length === 0) {
    return <p>No products available for this category.</p>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
}
