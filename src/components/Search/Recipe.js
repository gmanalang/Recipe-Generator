import React from 'react';

const RecipeList = ({title, cuisineType, image, ingredients}) => {
    return(
        <div className>
            <h1>{title}</h1>
            <ol>
                <h1>Ingredients</h1>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=""/>
            <p>Cuisine: {cuisineType}</p>
        </div>
    );
};

export default RecipeList;