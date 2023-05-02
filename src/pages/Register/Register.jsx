import React,{ useState, useContext } from "react";
import { Link} from 'react-router-dom';
import { Label, TextInput, Button} from "flowbite-react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

        setError('');

        if(password !== confirm){
            setError('password does not match')
            return;
        }
        else if(password.length < 6){
            setError('password must be 6 characters or longer')
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })

    }


  return (
    <div className="mt-12 my-container">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 p-5 mx-auto border-2 border-gray-400 rounded-lg md:w-1/2">
      <h2 className="mb-3 text-2xl font-medium text-center">Register</h2>
        <div>
          <div className="block mb-2">
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
          <div className="block mb-2">
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
        <div>
          <div className="block mb-2">
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
        <Button type="submit">Register new account</Button>
        <p className="text-center text-red-400">{error}</p>
        <p className="mt-1 text-center">Already have an account? Please <Link className="text-blue-500 underline" to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
