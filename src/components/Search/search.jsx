import React, { useEffect, useState } from "react";
import { RecipeList } from "./recipeList";
import { NavBar } from "../navbar/navbar";
import "./search.css";

export function Search({
    showHomePage
}) {
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
        <div>
            <NavBar showHomePage={showHomePage}/>
            <form onSubmit={getSearch} className="Search Bar">
                <p className="directions">
                    Search for an ingredient or multiple ingredients separated by commas!
                </p>
                <div className="input-and-button">
                    <input type="text" value={search} onChange={newSearch} placeholder="Ex: milk, eggs"></input>
                    <button className="button" type="submit">Search</button>
                </div>
            </form>
            <div>
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