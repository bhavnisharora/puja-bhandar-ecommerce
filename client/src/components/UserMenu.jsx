import React from "react";
import { Link } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div class="w-48 text-sm font-medium rounded-lg text-center ml-20">
        <Link to="/dashboard/user">
          <h1 className="py-4 text-lg">Dashboard</h1>
        </Link>
        <Link
          to="/dashboard/user/profile"
          aria-current="true"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/user/orders"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Orders
        </Link>
      </div>
    </>
  );
};

export default UserMenu;
