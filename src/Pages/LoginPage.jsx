import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Google } from "../images/google.svg";
import { ReactComponent as Logo } from "../images/tweeter.svg";
import tweetImg from "../images/tweet.jpg";
import { login } from "../services/AuthService";
import { Spinner } from "../Components";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }

    if (email && password) {
      login(email, password).then(
        () => {
          history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response && error.response && error.response.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
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
            Log in
          </h1>
          <div className="flex items-center space-x-8 justify-center mt-8">
            <button className="flex items-center space-x-3 bg-white shadow rounded-md py-2 px-8">
              <Facebook className="w-6 h-6" />
              <h1 className="text-sm font-medium">Facebook</h1>
            </button>
            <button className="flex items-center space-x-3 bg-white shadow rounded-md py-2 px-8">
              <Google className="w-6 h-6" />
              <h1 className="text-sm font-medium">Google</h1>
            </button>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mt-8 flex items-center">
              <div className="border-b w-1/2 bg-gray-800"></div>
              <div className="mx-4 font-medium">or</div>
              <div className="border-b w-1/2 bg-gray-800"></div>
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
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <label htmlFor="remember" className="font-medium">
                  Remember me
                </label>
              </div>
              <h1 className="text-sm font-medium underline">
                Forgot password?
              </h1>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-2 gradient mt-4 rounded-md font-medium bg-blue-500 text-white"
            >
              {loading && <Spinner />}
              Log in
            </button>
            {message && (
              <div className="text-red-500 font-medium">
                <p>{message || error}</p>
              </div>
            )}
            <p className="font-medium text-center mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
