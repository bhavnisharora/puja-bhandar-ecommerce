import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import Button from "../../components/Button";
const { Option } = Select;
const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div
      className="flex justify-between items-start"
      style={{ marginTop: "100px" }}
    >
      <div className="w-1/4 flex-shrink-0">
        <AdminMenu />
      </div>

      <div className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Product</h1>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto shadow-lg px-10 py-5">
          <Select
            bordered={false}
            placeholder="Select a category"
            size="large"
            showSearch
            className="form-select mb-3"
            onChange={(value) => {
              setCategory(value);
            }}
          >
            {categories?.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
          <div className="mb-3">
            <label className="btn btn-outline-secondary col-md-12">
              {photo ? photo.name : "Upload Photo"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>
          <div className="mb-3">
            {photo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  height={"200px"}
                  className="img img-responsive "
                />
              </div>
            )}
          </div>

          <div className="mb-3 mt-[-40px]">
            <input
              type="text"
              value={name}
              placeholder="write a name"
              className="form-control py-2 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              value={description}
              placeholder="write a description"
              className="form-control py-2 outline-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={price}
              placeholder="write a Price"
              className="form-control py-2 outline-none"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={quantity}
              placeholder="write a quantity"
              className="form-control py-2 outline-none"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Select
              bordered={false}
              placeholder="Select Shipping "
              size="large"
              showSearch
              className="form-select mb-3"
              onChange={(value) => {
                setShipping(value);
              }}
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>
          </div>
          <div className="mb-3">
            <button onClick={handleCreate}>
              <Button> CREATE PRODUCT</Button>
            </button>
          </div>
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
  );
};

export default CreateProduct;
