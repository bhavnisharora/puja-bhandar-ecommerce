import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate(location.state || "/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="flex justify-center items-center ">
        <form
          className="flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
          style={{ zIndex: 1 }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center p-5 md:p-8">
            <span className="mb-3 text-4xl text-black font-bold">
              Reset Password
            </span>
            <div className="py-2">
              <span className="flex-start flex mb-2 text-md">
                Email Address
              </span>
              <input
                type="email"
                className="w-full p-2 rounded-md placeholder:font-light  placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
                name="email"
                value={email}
                placeholder="enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="py-2">
              <span className="flex-start flex mb-2 text-md">
                Answer the question
              </span>
              <input
                type="text"
                className="w-full p-2 rounded-md placeholder:font-light  placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
                name="answer"
                value={answer}
                placeholder="enter your favourite sport name"
                onChange={(e) => setAnswer(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="py-2">
              <span className="flex-start flex mb-2 text-md">New Password</span>
              <input
                type="password"
                className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
                name="password"
                placeholder="enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                autoFocus
              />
            </div>

            <br />
            <button
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:font-bold hover:bg-white 
           hover:text-black hover:border hover:border-gray-300 outline hover:outline-offset-1"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
