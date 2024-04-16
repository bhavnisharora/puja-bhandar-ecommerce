import React, { useContext, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { PiUserCircleBold } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";
const Nav = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-1 left-0 z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="flex items-center">
            <div className="font-bold text-2xl cursor-pointer font-[Poppins] text-primary">
              <Link to="/">Logo</Link>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl ml-auto md:hidden cursor-pointer"
            >
              {open ? <IoClose /> : <GiHamburgerMenu />}
            </div>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-40 " : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-l md:my-0 pt-2 my-7">
                <Link
                  to={link.link}
                  className="inline-block px-4 font-semibold text-gray-500 hover:font-bold hover:text-primary duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Add Dashboard link here */}
            <li className="md:ml-8 text-l md:my-0 pt-2 my-7">
              <Link
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                className="inline-block px-4 font-semibold text-gray-500 hover:font-bold hover:text-primary duration-200 cursor-pointer"
              >
                Dashboard
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            {!auth.user ? (
              <>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center gap-3 font-sans">
                  <h1 className="text-xl font-semibold">
                    Hello,
                    <span className="capitalize"> {auth?.user?.name} </span>
                  </h1>
                  <button onClick={handleLogout}>
                    <Button>Logout</Button>
                  </button>
                </div>
              </>
            )}

            <div className="navcart">
              <Link to="/cart-page">
                <FiShoppingCart className="hover:scale-105 cursor-pointer text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
