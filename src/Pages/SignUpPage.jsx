import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../images/tweeter.svg";
import tweetImg from "../images/tweet.jpg";
import { register } from "../services/AuthService";

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="text-red-500 font-medium">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="text-red-500 font-medium">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="text-red-500 font-medium">This field is required!</div>
//     );
//   }
// };

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const history = useHistory(); 

  const handleSignUp = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    if (username && email && password) {
      register(username, email, password).then(
        (res) => {
          console.log(res)
          setSuccessful(true);
          history.push("/login")

        },
        (error) => {
          const resMessage =
            (error.response && error.response && error.response.message) ||
            error.message ||
            error.toString();

          setSuccessful(false);
          setMessage(resMessage);
        }
      );
    }
  };

  return (
    <div className="lg:flex">
      <div className="w-1/2 h-screen">
        <img src={tweetImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-100 h-screen flex-1 flex flex-col justify-center items-center">
        <div className="w-1/2 p-4">
          <Logo className="mx-auto mb-16 w-32" />
          <h1 className="text-center text-2xl font-medium text-gray-600">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp}>
            <>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="mb-2 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-400 pl-2"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-400 pl-2"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-400 pl-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 gradient mt-4 rounded-md font-medium bg-blue-500 text-white"
              >
                Sign up
              </button>
            </>
            {message && (
              <div className="bg-red-100 text-red-500 p-2">
                <p>{message}</p>
              </div>
            )}
            <p className="font-medium text-center mt-4">
              I already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUpPage);
