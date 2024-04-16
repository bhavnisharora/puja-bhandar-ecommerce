import React from "react";
import { Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div
        class="w-48 text-sm font-medium rounded-lg text-center ml-20"
        style={{ marginTop: "100px" }}
      >
        <Link to="/dashboard/admin">
          <h1 className="py-4 text-lg">Admin Dashboard</h1>{" "}
        </Link>
        <Link
          to="/dashboard/admin/create-category"
          aria-current="true"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Create Category
        </Link>
        <Link
          to="/dashboard/admin/create-product"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Create Products
        </Link>
        <Link
          to="/dashboard/admin/products"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Products
        </Link>
        <Link
          to="/dashboard/admin/users"
          class="block w-full px-4 py-4 text-black hover:text-white hover:bg-primary rounded-t-lg cursor-pointer"
        >
          Users
        </Link>
      </div>
    </>
  );
};

export default AdminMenu;
