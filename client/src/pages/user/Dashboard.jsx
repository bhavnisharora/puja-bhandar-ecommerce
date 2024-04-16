import React from "react";
import UserMenu from "../../components/UserMenu";
import { useAuth } from "../../components/context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div
      className="flex justify-between items-start"
      style={{ marginTop: "100px" }}
    >
      <div className="w-1/4 flex-shrink-0">
        <UserMenu />
      </div>

      <div className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Information
        </h1>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              User Name:
            </label>
            <p className="text-gray-700">{auth?.user?.name}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              User Email:
            </label>
            <p className="text-gray-700">{auth?.user?.email}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              User Contact:
            </label>
            <p className="text-gray-700">{auth?.user?.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
