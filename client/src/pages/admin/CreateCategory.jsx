import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "./../../components/Button";
import CategoryForm from "../../components/form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/category/create-category",
        {
          name,
        }
      );

      if (data?.success) {
        toast.success("category is updated");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data.success) {
        setCategories(data.category);
        if (data.category.length > categories.length) {
          toast.success("Added category successfully");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `
        http://localhost:8080/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  // handle delete
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
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
        <h1 className="text-2xl font-bold mb-6 text-center">Manage Category</h1>
        <div className="mt-[-80px]">
          <CategoryForm
            handleSubmit={handleSubmit}
            value={name}
            setValue={setName}
          />
        </div>
        <br />
        <br />
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <>
                    <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 ">
                      <td key={c._id} className="py-3 ps-3">
                        {c.name}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          <Button
                            className="p-3 bg-primary
                        "
                          >
                            Edit
                          </Button>
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(c._id);
                          }}
                        >
                          <Button>Delete</Button>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/*  */}
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto"></div>
      </div>
    </div>
  );
};

export default CreateCategory;
