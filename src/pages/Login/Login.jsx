import React from 'react';
import { Link} from 'react-router-dom';
import { Label, TextInput, Checkbox, Button} from "flowbite-react";

const Login = () => {
    return (
        <div className="mt-12">
      <form className="flex flex-col gap-4 w-1/2 mx-auto border-2 border-gray-400  p-5 rounded-lg">
      <h2 className="text-2xl font-medium text-center
      mb-3">Login</h2>
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
        <p className="mt-1 text-center">Don't have an account? Please <Link className="text-blue-500 underline" to="/register">Register</Link></p>
      </form>
    </div>
    );
};

export default Login;