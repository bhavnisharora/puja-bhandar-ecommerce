import React from "react";
import UserMenu from "../../components/UserMenu";

const Profile = () => {
  return (
    <div>
      <div
        className="flex justify-between items-start"
        style={{ marginTop: "100px" }}
      >
        <div className="w-1/4 flex-shrink-0">
          <UserMenu />
        </div>

        <div className="w-3/4 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Your Profile</h1>
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {/* <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Admin Name:
            </label>
            <p className="text-gray-700">{auth?.user?.name}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Admin Email:
            </label>
            <p className="text-gray-700">{auth?.user?.email}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Admin Contact:
            </label>
            <p className="text-gray-700">{auth?.user?.phone}</p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
