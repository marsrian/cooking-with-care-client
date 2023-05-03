import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import PrivetRoute from '../privetRoute/PrivetRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/chefrecipes/:id',
            element: <PrivetRoute><ChefRecipes></ChefRecipes>,</PrivetRoute>,
            loader: ({params}) => fetch(`https://chef-recipe-hunter-server-marsrian.vercel.app/chefrecipes/${params.id}`)
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '*',
            element: <NotFoundPage></NotFoundPage>
        }
      ]
    },
  ]);

export default router;