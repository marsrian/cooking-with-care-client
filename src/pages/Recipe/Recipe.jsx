import React from 'react';

const Recipe = ({ }) => {
    const {name, cooking_method, rating} = recipe;
    return (
        <div className='border-2 border-gray-300 p-4'>
            <h3 className='text-lg font-medium mb-2'>{name}</h3>
            <p><span className='font-medium mb-2'>Cooking Method:</span> {cooking_method}</p>
            <p><span className='font-medium'>Rating:</span> {rating}</p>
        </div>
    );
};

export default Recipe;