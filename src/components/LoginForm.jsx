import { useState } from "react";
import Logo from "../assets/googlelogo.jpeg";
import Alert from "./Alert";

// Set initial state for form data
const initialState = {
  emailAddress: "",
  password: "",
};

const LoginForm = () => {
  // set the form data to the initial state
  const [formData, setFormData] = useState(initialState);
  const { emailAddress, password } = formData;
  // setup state to handle the reuslt returned from form submission
  const [result, setResult] = useState({ color: "", outcome: "" });
  // set proper format for valid email
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.emailAddress || !formData.password) {
      return setResult({
        type: "allError",
        color: "red",
        outcome: "All Fields are required",
      });
    }
    if (!formData.emailAddress.match(mailFormat)) {
      return setResult({
        type: "emailError",
        color: "red",
        outcome: "Enter a valid email",
      });
    }

    return setResult({
      type: "success",
      color: "green",
      outcome: "You have successfully logged in",
    });
  };
  // set form data based on user input
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-16 max-w-5xl mx-auto">
      <div className="flex space-y-3 flex-col items-center justify-center">
        <h1 className="font-semibold text-5xl text-gray-700">Login</h1>
        <p className="text-gray-500 text-sm">
          Enter your credentials to access your account
        </p>
      </div>
      <button className="rounded-md flex shadow-md bg-gray-100 p-3 border-2 items-center justify-center w-full hover:scale-105 transition ease-in-out">
        <img src={Logo} alt="google login" className="w-16 -ml-2.5" />
        Login with Google
      </button>
      <div className="flex space-x-5 items-center justify-center w-full">
        <div className="bg-gray-300 w-full h-0.5"></div>
        <p className="">Or</p>
        <div className="bg-gray-300 w-full h-0.5"></div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <label htmlFor="emailAddress" className="text-sm">
            Email Address
          </label>
          <input
            name="emailAddress"
            onChange={onInputChange}
            value={emailAddress}
            type="text"
            placeholder="email@domain.com"
            className="w-full outline-none border-2 p-2 mt-1 mb-4 rounded-md"
          />
          <div className="flex justify-between">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <a href="/" className="text-blue-500 text-sm font-semibold">
              Forgot Password?
            </a>
          </div>

          <input
            name="password"
            onChange={onInputChange}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full outline-none border-2 p-2 mt-1 mb-4 rounded-md"
          />
          <div className="flex items-center justify-center">
            <Alert result={result} />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-500 w-full mt-3 p-3 hover:scale-105 transition ease-in-out rounded-md"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mt-3 p-3 space-x-1.5">
          <p className="">Don't have an account? </p>
          <a href="/" className="font-bold">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
