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
        <div className='mt-8 my-container'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
                <div className='col-span-1'>
                    <img className='w-full h-96' src={chef_picture} alt="" />
                </div>
                <div className='col-span-2 p-5 my-auto border border-gray-400'>
                    <h3 className='mb-3 text-3xl font-semibold'>{chef_name}</h3>
                    <p className='mb-3 text-lg leading-normal l md:pr-8'><span className='font-medium'>Bio:</span> {bio}</p>
                    <p className='mb-3 text-lg leading-normal l'><span className='font-medium'>Total Recipe:</span> {numbers_of_recipes}</p>
                    <p className='mb-3 text-lg leading-normal l'><span className='font-medium'>Experience:</span> {years_of_experience}</p>
                    <p className='mb-3 text-lg leading-normal l'><span className='font-medium'>Likes: </span> {likes}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-3'>
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