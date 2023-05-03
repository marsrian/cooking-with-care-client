import React from 'react';

const Footer = () => {
    return (
        <div className='p-4 pl-10 bg-slate-500'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Cooking With Care</h3>
                    <p className='text-white mb-3'>Fresh Food Fresh Serve</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>STORE LOCATION</h3>
                    <p className='text-gray-300'>9066 Green Lake Drive Chevy Chase, MD 20815</p>
                    <h5>Monday - Saturday</h5>
                    <p className='text-gray-300'>8.00am - 4.00pm</p>
                    <h5>Sunday</h5>
                    <p className='text-gray-300 mb-3'>9.00am - 4.00pm</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>INFORMATION</h3>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Check out</li>
                        <li className='mb-3'>Service</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>CATEGORIES</h3>
                    <ul>
                        <li>Fruits & Vegetables</li>
                        <li>Dairy Products</li>
                        <li>Package Foods</li>
                        <li>Beverage</li>
                        <li>Healthy & Wellness</li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>© copyright all reserved -Mars Rian</p>
        </div>
    );
};

export default Footer;