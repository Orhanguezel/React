import { useFetch } from "../../hooks/useFetch";
import { CategoryListContainer, CategoryItem } from "../../styles/CategoryListStyles";
import PropTypes from "prop-types";

CategoryList.propTypes = {
  currentCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeCategory: PropTypes.func.isRequired,
};

export default function CategoryList({ currentCategory, changeCategory }) {
  const { data: categories, loading, error } = useFetch("/categories");

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <CategoryListContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          $isActive={currentCategory === category.id}
          onClick={() => changeCategory(category)}
        >
          {category.categoryName}
        </CategoryItem>
      ))}
    </CategoryListContainer>
  );
}
