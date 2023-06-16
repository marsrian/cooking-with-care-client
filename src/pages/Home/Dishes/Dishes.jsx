import React from 'react';
import cheeseBurger from '../../../assets/cheese-burger.jpg';
import pasta from '../../../assets/pasta.jpg';
import burger from '../../../assets/Burger.jpg';
import ceaserSalad from '../../../assets/salad.jpg';
import beefBurger from '../../../assets/Beef-burger.jpg';
import pizza from '../../../assets/pizza.jpg';

const Dishes = () => {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={cheeseBurger} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>DOUBLE CHEESE BURGER</h3>
                <p className='px-3 mb-3'>This classic burger features two juicy beef patties, melted cheese, crisp lettuce, and tangy pickles. Served on a soft sesame seed bun, this burger is a delicious and satisfying meal for any time of day.</p>
            </div>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={pasta} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>PASTA</h3>
                <p className='px-3 mb-3'>This versatile dish can be prepared in countless ways, from classic spaghetti with tomato sauce to creamy fettuccine Alfredo.</p>
            </div>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={burger} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>BURGER</h3>
                <p className='px-3 mb-3'>Our signature burger features a juicy beef patty topped with fresh lettuce, tomato, and your choice of cheese. Served with a side of crispy fries, this burger is sure to satisfy your hunger.</p>
            </div>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={ceaserSalad} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>CEASER SALAD</h3>
                <p className='px-3 mb-3'>Our Caesar salad is a fresh and healthy option, featuring crisp romaine lettuce, tangy Caesar dressing, and crunchy croutons. Topped with freshly grated Parmesan cheese, this salad is a flavorful and satisfying meal.</p>
            </div>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={beefBurger} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>BEEF BURGER MEAL</h3>
                <p className='px-3 mb-3'>This hearty meal includes a juicy beef burger, crispy fries, and a refreshing soft drink. Choose your toppings and condiments to customize your burger, and enjoy a delicious meal that's perfect for any occasion</p>
            </div>
            <div className='border-2 border-gray-400 rounded-lg'>
                <img className='w-full mb-3 h-72' src={pizza} alt="" />
                <h3 className='px-3 mb-2 text-lg font-medium'>PIZZA</h3>
                <p className='px-3 mb-3'>A beloved Italian dish made with a flatbread crust, tomato sauce, cheese, and various toppings such as meat, vegetables, and herbs.</p>
            </div>
        </div>
    );
};

export default Dishes;