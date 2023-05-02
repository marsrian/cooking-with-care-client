import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {_id, chef_picture, chef_name, years_of_experience, numbers_of_recipes, bio, likes} = chef;
    return (
        <div className='my-container'>
            <img className='mb-2 w-full h-72' src={chef_picture} alt="chef" />
            <h3><span className='font-medium mb-2'>Chef Name:</span> {chef_name}</h3>
            <p>Experience: {years_of_experience}</p>
            <p>Total Recipes: {numbers_of_recipes}</p>
            <p className='mb-2'>LIkes: {likes}</p>
            <Link to={`/chefs/${_id}`}>
                <button className='px-3 py-2 bg-yellow-300 text-lg font-medium w-full rounded-lg text-white'>View Recipes</button>
            </Link>
        </div>
    );
};

export default Chef;