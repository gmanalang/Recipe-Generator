import React, { useEffect, useState } from "react";
import { RecipeList } from "./recipeList";
import "./search.css";

export function Search() {
    const APP_ID = "309b7c52";
    const APP_KEY = "b44b40d133ac07a077f1789e140476a0";
    const [recipes, findRecipes] = useState([]);
    const [search, searchResults] = useState('');
    const [query, userInput] = useState(' ');

    useEffect(() => {
        listRecipes();
    }, [query]);

    const listRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

        const data = await response.json();
        console.log(data.hits);
        findRecipes(data.hits);
    };

    const newSearch = e => {
        searchResults(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        userInput(search);
        searchResults('');
    }

    return (
        <div className="Search">
            <form onSubmit={getSearch} className="Search Bar">
                <p>
                    Search for an ingredient or multiple ingredients separated by commas!
                </p>
                <input className="searchBar" type="text" value={search} onChange={newSearch}></input>
                <button className="searchButton" type="submit">Search</button>
            </form>
            <div className="Recipes List">
                {recipes.map(recipeList => (
                    <RecipeList
                        key={recipeList.recipe.label}
                        title={recipeList.recipe.label}
                        cuisineType={recipeList.recipe.cuisineType}
                        image={recipeList.recipe.image}
                        ingredients={recipeList.recipe.ingredients}
                    />

                ))}
            </div>
        </div>
    )
}