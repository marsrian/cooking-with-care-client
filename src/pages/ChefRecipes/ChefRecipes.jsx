import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefRecipes = () => {
    const allRecipes = useLoaderData();
    const {
        _id,
        chef_picture,
        chef_name, 
        years_of_experience, 
        numbers_of_recipes, 
        bio, 
        likes,
        recipes,
    } = allRecipes;
    return (
        <div className='my-container mt-8'>
            <h1 className='text-lg font-medium text-center mb-3'>Chef Name: {chef_name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    recipes.map(recipe => <Recipe
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;