import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { FaRegThumbsUp } from 'react-icons/fa';

const Chef = ({ chef }) => {
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    numbers_of_recipes,
    likes,
  } = chef;
  return (
    <div className="border-2 border-gray-400 rounded-lg">
      <LazyLoad className="" height={288} offset={50}>
        <img
          className="w-full mb-4 rounded-t-lg h-72"
          src={chef_picture}
          alt="chef"
        />
      </LazyLoad>
      <div className="px-3 mt-3">
        <h3 className="mb-2">
          <span className="mb-2 text-xl font-medium">Chef Name:</span> {chef_name}
        </h3>
        <p><span className="font-medium">Experience:</span> {years_of_experience}</p>
        <div className="flex">
          <p className="flex-grow"><span className="font-medium">Total Recipes:</span> {numbers_of_recipes}</p>
          <p className="flex gap-2 mb-2"><FaRegThumbsUp></FaRegThumbsUp>: {likes}</p>
        </div>
      </div>
      <Link to={`/chefrecipes/${_id}`}>
        <button className="w-full px-3 py-2 text-lg font-medium text-white bg-yellow-300 rounded-lg hover:bg-yellow-500">
          View Recipes
        </button>
      </Link>
    </div>
  );
};

export default Chef;
