import React from "react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../components/context/auth";

const AdminPanel = () => {
  const [auth] = useAuth();
  return (
    <div
      className="flex justify-between items-start"
      style={{ marginTop: "100px" }}
    >
      <div className="w-1/4 flex-shrink-0">
        <AdminMenu />
      </div>

      <div className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Information
        </h1>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <div className="bg-white shadow-md rounded p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

// <div className="container mx-auto mt-10" style={{ marginTop: "100px" }}>
//   <h2 className="text-3xl font-semibold text-center mb-6">Admin Panel</h2>
//   <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
//     <div className="mb-4">
//       <label
//         htmlFor="productName"
//         className="block text-gray-700 font-semibold mb-2"
//       >
//         Product Name:
//       </label>
//       <input
//         id="productName"
//         type="text"
//         className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
//       />
//     </div>
//     <div className="mb-4">
//       <label
//         htmlFor="category"
//         className="block text-gray-700 font-semibold mb-2"
//       >
//         Category:
//       </label>
//       <select
//         id="category"
//         className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
//       >
//         <option value="">Select Category</option>
//         <option value="bracelets">Bracelets</option>
//         <option value="puja items">Puja Items</option>
//         <option value="clothing">Clothing</option>
//         <option value="malas">Malas</option>
//         <option value="yoga essentials">Yoga Essentials</option>
//         <option value="books">Books</option>
//       </select>
//     </div>
//     <div className="mb-4">
//       <label
//         htmlFor="price"
//         className="block text-gray-700 font-semibold mb-2"
//       >
//         Price:
//       </label>
//       <input id="price" type="number" />
//     </div>
//     <div className="mb-4">
//       <label
//         htmlFor="image"
//         className="block text-gray-700 font-semibold mb-2"
//       >
//         Image:
//       </label>
//       <input
//         id="image"
//         type="file"
//         className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
//       />
//     </div>
//     <button className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark transition duration-300">
//       Add Product
//     </button>
//   </div>
// </div>
