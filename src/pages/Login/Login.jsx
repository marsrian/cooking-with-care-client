import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");

    // Sign In with email and Password
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Github Sign In
  const handleGithubSignIn = () => {
    setError("");
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-8 my-container">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-5 mx-auto border-2 border-gray-400 rounded-lg md:w-1/2"
      >
        <h2 className="mb-3 text-2xl font-medium text-center">Login</h2>
        <div>
          <div className="block mb-2">
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
          <div className="block mb-2">
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
        <p className="text-center text-red-400">{error}</p>
        <p className="mt-1 text-center">
          Don't have an account? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="flex items-center justify-center mt-2">
        <hr className="w-20 h-1 bg-gray-400" />
        <p>Or</p>
        <hr className="w-20 h-1 bg-gray-400" />
      </div>
      <div className="flex flex-col mt-3">
        <button
          onClick={handleGithubSignIn}
          className="flex items-center justify-center gap-2 py-2 mx-auto font-medium border-2 border-gray-400 rounded-xl w-60"
        >
          <FaGithub /> Sign In with Github
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 py-2 mx-auto mt-2 font-medium text-blue-500 border-2 border-gray-400 rounded-xl w-60"
        >
          <FaGoogle /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
