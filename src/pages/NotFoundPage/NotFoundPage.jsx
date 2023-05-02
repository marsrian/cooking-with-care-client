import React from 'react';
import notFound from '../../assets/notfound.png';

const NotFoundPage = () => {
    return (
        <div className='my-container mt-10 text-center'>
            <img className='mb-3 w-60 mx-auto ' src={notFound} alt="" />
            <h1 className='text-3xl font bold text-red-600 mb-4'>404</h1>
            <h3 className='text- 2xl font-semibold text-orange-800'>Not Found This Page</h3>
        </div>
    );
};

export default NotFoundPage;