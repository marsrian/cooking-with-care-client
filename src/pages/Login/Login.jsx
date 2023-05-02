import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="mt-8 my-container">
      <form className="flex flex-col gap-4 md:w-1/2 mx-auto border-2 border-gray-400  p-5 rounded-lg">
        <h2
          className="text-2xl font-medium text-center
      mb-3"
        >
          Login
        </h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="Enter email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your Password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            name="password"
            placeholder="password"
            required={true}
            shadow={true}
          />
        </div>
        <Button type="submit">Login</Button>
        <p className="mt-1 text-center">
          Don't have an account? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="flex justify-center items-center mt-2">
        <hr className="w-20 h-1 bg-gray-400" />
        <p>Or</p>
        <hr className="w-20 h-1 bg-gray-400" />
      </div>
      <div className="flex flex-col mt-3">
        <button className="flex justify-center py-2 border-2 border-gray-400 rounded-xl w-60 mx-auto gap-2 items-center font-medium">
          <FaGithub /> Continue with Github
        </button>
        <button className="flex justify-center py-2 border-2 border-gray-400 rounded-xl w-60 mx-auto gap-2 items-center text-blue-500 mt-2 font-medium">
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
