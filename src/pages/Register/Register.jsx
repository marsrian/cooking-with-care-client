import React,{ useState } from "react";
import { Link} from 'react-router-dom';
import { Label, TextInput, Checkbox, Button} from "flowbite-react";

const Register = () => {
    const [error, setError] = useState("");

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

        if(password !== confirm){
            setError('password does not match')
            return;
        }
        else if(password.length < 6){
            setError('password must be 6 characters or longer')
        }
    }


  return (
    <div className="mt-12">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-1/2 mx-auto border-2 border-gray-400  p-5 rounded-lg">
      <h2 className="text-2xl font-medium text-center
      mb-3">Register</h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name2" value="Your Name" />
          </div>
          <TextInput
            id="name2"
            type="text"
            name="name"
            placeholder="Enter Name"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Photo URL" />
          </div>
          <TextInput
            id="photo2"
            type="text"
            name="photo"
            placeholder="Photo URL"
            required={true}
            shadow={true}
          />
        </div>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Confirm Password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            name="confirm"
            placeholder="confirm password"
            required={true}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the
            <Link to="/terms"
              className="text-blue-600 hover:underline"
            >
               terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
        <p className="text-red-400 text-center">{error}</p>
        <p className="mt-1 text-center">Already have an account? Please <Link className="text-blue-500 underline" to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
