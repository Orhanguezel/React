import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/category.css"; // Yeni CSS dosyasını içeri aktarın

CategoryList.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
};

export default function CategoryList(props) {
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

  const addCategorie = () => {
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

  const deleteCategorie = (id) => {
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Kategori silinemedi. Sunucu yanıtı: ${response.status}`);
        }
        console.log(`Kategori silindi: ${id}`);
        return response.json();
      })
      .then(() => {
        getCategories(); // Güncel kategorileri yükle
      })
      .catch((error) => {
        console.error("Silme işlemi sırasında bir hata oluştu:", error);
      });
  };

  return (
    <div className="category-container">
      <h3 className="category-title">{props.info.title}</h3>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`category-item ${
              category.categoryName === props.currentCategory
                ? "category-item-selected"
                : "category-item-default"
            }`}
            onClick={() => props.changeCategory(category)}
          >
            <div className="flex justify-between items-center">
              <span>{category.categoryName}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCategorie(category.id);
                }}
                className="category-delete-button"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={addCategorie} className="category-add-button">
        Kategori Ekle
      </button>
    </div>
  );
}
