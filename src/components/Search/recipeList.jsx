import React from "react";
import "./search.css";

export function RecipeList({ title, cuisineType, image, ingredients }) {
  return (
    <div>
      <div className="card">
        <div class="flex">
          <div>
            <h1>{title}</h1>
            <ol>
              <h1 className="ingredients">Ingredients</h1>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
              <p>Cuisine: {cuisineType}</p>
            </ol>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
