import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/context/auth";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "../../components/Button";
import SearchInput from "../../components/form/searchInput";

const Products = () => {
  const [auth, setAuth] = useState();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if(data?.success) {
        setCategories(data?.category);
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch(error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if(value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if(!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if(checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <SearchInput />
      <div className="flex  justify-between px-40">
        <div className="flex flex-col gap-5">
          <h1>Filter by category</h1>
          <span className="flex flex-col">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </span>
          <br />
          {/* price filter */}
          <h1>Filter by price</h1>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
          <button
            onClick={() => window.location.reload()}
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            RESET FILTERS
          </button>
        </div>

        <div>
          <h2>All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {products?.map((p) => (
              <div className="card" style={{ width: "15rem" }} key={p._id}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title mt-3 font-bold text-2xl">
                    {p.name}
                  </h5>
                  {/* <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p> */}
                  <p className="card-text text-xl font-semibold text-gray-600 font-sans">
                    ₹{p.price}
                  </p>
                  <div className="flex">
                    <button
                      className="bg-primary text-white font-medium font-[Poppins] py-2 px-2 rounded  hover:bg-white 
        hover:text-primary outline hover:outline-offset-1
      duration-200"
                    >
                      More Details
                    </button>
                    <button
                      className="bg-primary text-white font-medium font-[Poppins] py-2 px-3 rounded md:ml-8 hover:bg-white 
        hover:text-primary outline hover:outline-offset-1
      duration-200"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                <div className="flex items-center">
                  <span className="me-2">
                    <AiOutlineLoading3Quarters />
                  </span>
                  {loading ? "Loading ..." : "Loadmore"}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
