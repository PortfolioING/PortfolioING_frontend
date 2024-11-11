import { useState } from "react";
import { CategoryFormWrapper, Category } from "./ProjectSurvey.styles";

const CATEGORY_OPTIONS = [
  "프론트엔드",
  "기획",
  "백엔드",
  "PM",
  "보안",
  "DESIGN",
  "안드로이드",
  "IOS",
  "AI",
];

const CategoryForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <CategoryFormWrapper>
      <div className="desc">
        <p className="bold">복수 응답</p>
        <p>여러개를 골라주세요!</p>
      </div>
      <div className="category-wrapper">
        {CATEGORY_OPTIONS.map((label) => (
          <Category
            key={label}
            isActive={selectedCategories.includes(label)}
            onClick={() => toggleCategory(label)}
          >
            {label}
          </Category>
        ))}
      </div>
    </CategoryFormWrapper>
  );
};

export default CategoryForm;