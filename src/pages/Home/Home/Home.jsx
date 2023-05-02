import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chefs/')
        .then(res => res.json())
        .then(data => setChefs(data));
    }, [])

    return (
        <div>
            <h3 className='text-lg font-medium text-center'>Home Page</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    chefs.map(chef => <Chef
                        key={chef._id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Home;