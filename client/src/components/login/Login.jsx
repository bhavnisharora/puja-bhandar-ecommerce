import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../components/context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center login-background mt-[-40px]">
      <form
        className="flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        style={{ zIndex: 1 }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center p-5 md:p-8">
          <span className="mb-3 text-4xl text-black font-bold">Login </span>
          <span className="font-semibold text-black mb-8">Welcome Back!</span>
          <div className="py-2">
            <span className="flex-start flex mb-2 text-md">Email Address</span>
            <input
              type="email"
              className="w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
              name="email"
              value={email}
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="py-2">
            <span className="flex-start flex mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
              name="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
          </div>

          <br />
          <div className="flex justify-between w-full py-2">
            <div className="mr-24">
              <Link to="/forgot-password">
                <span className="text-md">Forgot Password ?</span>
              </Link>
            </div>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:font-bold hover:bg-white 
           hover:text-black hover:border hover:border-gray-300 outline hover:outline-offset-1"
          >
            Login
          </button>

          <br />
          <div className="text-center text-black">
            Create new account ?
            <Link to="/register">
              <span className="font-bold text-black pl-2 cursor-pointer">
                Register Form
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
