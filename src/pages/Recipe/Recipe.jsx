import React,{useState} from 'react';
import { Rating } from '@smastrom/react-rating';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = ({recipe}) => {
    const {name, cooking_method, rating} = recipe;
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleFavourite = () =>{
        setIsButtonDisabled(true);
        toast(`${name} is my favourite`)
    }

    return (
        <div className='border-2 border-gray-300 p-4'>
            <h3 className='text-xl font-medium mb-2'>{name}</h3>
            <p><span className='font-medium mb-2'>Cooking Method:</span> {cooking_method}</p>
            <div className='flex'>
                <p className='mb-3'><span className='font-medium'>Rating: </span></p>
                <Rating className='mx-auto' style={{ maxWidth: 150 }} value={rating} readOnly />
            </div>
            <button disabled={isButtonDisabled} onClick={handleFavourite} className='px-3 py-2 text-white bg-blue-500 font-medium text-lg rounded-lg '>Favourite</button>
            <Toaster />
        </div>
    );
};

export default Recipe;