import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    numbers_of_recipes,
    bio,
    likes,
  } = chef;
  return (
    <div className="border-2 border-gray-400 rounded-lg">
      <img
        className="w-full mb-2 rounded-t-lg h-72"
        src={chef_picture}
        alt="chef"
      />
      <div className="px-3">
        <h3>
          <span className="mb-2 font-medium">Chef Name:</span> {chef_name}
        </h3>
        <p>Experience: {years_of_experience}</p>
        <p>Total Recipes: {numbers_of_recipes}</p>
        <p className="mb-2">LIkes: {likes}</p>
      </div>
        <Link to={`/chefs/${_id}`}>
          <button className="w-full px-3 py-2 text-lg font-medium text-white bg-yellow-300 rounded-lg hover:bg-yellow-500">
            View Recipes
          </button>
        </Link>
    </div>
  );
};

export default Chef;
