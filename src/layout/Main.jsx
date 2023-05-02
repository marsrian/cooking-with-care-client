import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-124px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;