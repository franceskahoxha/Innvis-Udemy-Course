import "./CategoryItem.scss";
import React from "react";

function CategoryItem({ category }) {
  const { imageUrl, title, subTitle } = category;
  return (
    <div>
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
