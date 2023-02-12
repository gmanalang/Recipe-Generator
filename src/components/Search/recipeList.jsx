import React from "react";

export function RecipeList({ title, cuisineType, image, ingredients }) {
  return (
    <div>
      <div className="card">
        <h1>{title}</h1>
        <ol>
          <h1 id="title">Ingredients</h1>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <img src={image} alt="" />
        <p>Cuisine: {cuisineType}</p>
      </div>
    </div>
  );
}
