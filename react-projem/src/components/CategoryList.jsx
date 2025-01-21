import "../styles/category.css"; // Yeni CSS dosyasını içeri aktarın
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

CategoryList.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired, // mode prop'u ekleniyor
};

export default function CategoryList({ currentCategory, changeCategory, info, mode }) {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API on component mount
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Kategoriler yüklenemedi:", error));
  };

  const addCategory = () => {
    const newCategory = {
      id: `${categories.length + 1}`,
      categoryName: `Category ${categories.length + 1}`,
    };

    fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories([...categories, data]);
      })
      .catch((error) => console.error("Kategori eklenirken hata oluştu:", error));
  };

  const deleteCategory = (id) => {
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Kategori silinemedi. Sunucu yanıtı: ${response.status}`);
        }
        console.log(`Kategori silindi: ${id}`);
        getCategories(); // Güncel kategorileri yükle
      })
      .catch((error) => {
        console.error("Silme işlemi sırasında bir hata oluştu:", error);
      });
  };

  return (
    <div className={`p-4 rounded ${mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h3 className="text-lg font-bold mb-4">{info.title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`flex justify-between items-center p-2 rounded ${
              category.categoryName === currentCategory ? "bg-indigo-600 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => changeCategory(category)}
          >
            <span>{category.categoryName}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteCategory(category.id);
              }}
              className="text-red-500 hover:text-red-700"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={addCategory}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Kategori Ekle
      </button>
    </div>
  );
}
