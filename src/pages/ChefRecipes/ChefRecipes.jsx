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
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                <div className='col-span-1'>
                    <img className='h-96 w-full' src={chef_picture} alt="" />
                </div>
                <div className='my-auto col-span-2'>
                    <h3 className='text-3xl font-semibold mb-3'>{chef_name}</h3>
                    <p className='text-lg l leading-normal mb-3 md:pr-8'><span className='font-medium'>Bio:</span> {bio}</p>
                    <p className='text-lg l leading-normal mb-3'><span className='font-medium'>Total Recipe:</span> {numbers_of_recipes}</p>
                    <p className='text-lg l leading-normal mb-3'><span className='font-medium'>Experience:</span> {years_of_experience}</p>
                    <p className='text-lg l leading-normal mb-3'><span className='font-medium'>Likes: </span> {likes}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                {
                    recipes.map((recipe, index) => <Recipe
                        key={index}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;