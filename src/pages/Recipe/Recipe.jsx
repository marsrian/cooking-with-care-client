import React,{useState} from 'react';
import { Rating } from '@smastrom/react-rating';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = ({recipe}) => {
    const {image, name, cooking_method, rating, ingredients} = recipe;
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleFavourite = () =>{
        setIsButtonDisabled(true);
        toast(`${name} is my favourite ❤`)
    }

    return (
        <div className='p-4 border-2 border-gray-300'>
            <img className='w-full mb-2 h-72' src={image} alt="" />
            <h3 className='mb-2 text-xl font-medium'>{name}</h3>
            <div>
                <p className='mb-2 font-medium'>Ingredients:</p>
                <ul className='mb-3'>
                    {
                        ingredients.map((ingredient, index)=> <li
                            className='pl-3'
                            key={index}
                        >✅ {ingredient},</li>)
                    }
                </ul>
            </div>
            <p><span className='mb-2 font-medium'>Cooking Method:</span> {cooking_method}</p>
            <div className='flex'>
                <p className='mb-3'><span className='font-medium'>Rating: </span></p>
                <Rating className='mx-auto' style={{ maxWidth: 150 }} value={rating} readOnly />
            </div>
            <button disabled={isButtonDisabled} onClick={handleFavourite} className={`${isButtonDisabled ? 'bg-blue-400' : 'bg-blue-700' } px-3 py-2 text-lg font-medium text-white rounded-lg `}>Favourite</button>
            <Toaster />
        </div>
    );
};

export default Recipe;