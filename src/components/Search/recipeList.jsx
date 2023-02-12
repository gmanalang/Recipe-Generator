import React from "react";
import "./search.css";

export function RecipeList({ title, cuisineType, image, ingredients }) {
  return (
    <div>

      <div className="card">
        <div class="flex">
          <div>
            <h1>{title}</h1>
            <h1 className="ingredients">Ingredients</h1>
            <ol>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
            <p className = "cuisine">Cuisine: {cuisineType}</p>
          </div>
          <img className= "image" src={image} alt="" />
        </div>
      </div>

    </div>
  );
}
