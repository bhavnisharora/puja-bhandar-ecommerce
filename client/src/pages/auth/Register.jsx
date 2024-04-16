import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { toast } from "react-hot-toast";

import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100 mt-10 register-background">
      <form
        className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        style={{ marginTop: "50px" }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center p-8 md:p-8">
          <span className="mb-3 text-4xl text-black font-bold">SignUp </span>
          <span className="font-semibold text-black mb-8">
            Looks like you're new here
          </span>

          <div className="py-4 ">
            {/* <span className="flex-start flex mb-2 text-md">Your Name</span> */}
            <input
              type="text"
              className="w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500
               ring-1 ring-gray-400 focus:ring-black"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter your name"
              required
              autoFocus
            />
          </div>
          <div className="py-4 ">
            <input
              type="text"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="email"
              value={email}
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="py-4 ">
            <input
              type="text"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="phone"
              placeholder="your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="py-4 ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="password"
              placeholder="enter your password"
              required
              autoFocus
            />
          </div>

          <div className="py-4 ">
            <input
              type="text"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="address"
              placeholder="enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="py-4 ">
            <input
              type="text"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="address"
              placeholder="what's your favourite sport"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" className="mr-2" />
              <span className="text-md">
                I Agree With
                <Link to="/terms-conditions" className="font-semibold">
                  &nbsp; Terms & Conditions
                </Link>
              </span>
            </div>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6
          hover:bg-white hover:text-black hover:font-bold hover:border hover:border-gray-300 outline hover:outline-offset-1"
          >
            Sign Up
          </button>

          <br />
          <div className="text-center text-grey">
            Already have an account ?
            <Link to="/login">
              <span className="font-bold text-black pl-2 cursor-pointer">
                Login Form
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
