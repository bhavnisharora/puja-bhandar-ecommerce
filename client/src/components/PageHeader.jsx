import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/banner/1.jpg";
const PageHeader = ({ title, elem, img }) => {
  return (
    <div>
      <div className="py-10 mb-10">
        <div className="pageheader-content text-center">
          <div className="flex justify-center items-center">
            <img src={img} alt="" />
          </div>
          <div className="flex justify-center items-center space-x-3 py-5">
            <span className="text-xl">
              <Link to="/">Home </Link>
            </span>
            <span>/</span>
            <span
              className="active text-primary font-bold text-xl"
              aria-current="page"
            >
              {elem}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
