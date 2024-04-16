import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Product = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch(error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
 
  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div
      className="flex justify-between items-start"
      style={{ marginTop: "80px" }}
    >
      <div className="w-1/4 flex-shrink-0">
        <AdminMenu />
      </div>

      <div className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          All Products list
        </h1>
        <div className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div class=" bg-white border border-gray-200 rounded-lg shadow text-black ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      style={{ height: "200px", width: "180px" }}
                      src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                        {p.name}
                      </h5>
                    </a>
                    <p class="mb- 3 font-normal text-gray-700 dark:text-gray-400">
                      {p.price}
                    </p>
                    <p class="mb- 3 font-normal text-gray-700 dark:text-gray-400">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
