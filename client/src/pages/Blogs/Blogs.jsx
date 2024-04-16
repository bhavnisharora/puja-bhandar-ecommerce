// import { Link } from "react-router-dom";
// import PageHeader from "../../components/PageHeader";
// import articles from "./Articles";
import hanuman from "../../assets/blogs/hanuman.jpg";
import ganesha from "../../assets/blogs/ganesha.jpg";
import durga from "../../assets/blogs/durga.jpg";
import sai from "../../assets/blogs/sai.jpg";
import shanidev from "../../assets/blogs/shanidev.jpg";
import shiva from "../../assets/blogs/shiva.jpg";
const Blogs = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        {/* <PageHeader title="Blogs" elem="Blogs" /> */}
        <br />
        <section className="">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold capitalize lg:text-4xl font-sans">
              Our Blogs
            </h1>

            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={hanuman}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Hanuman Chalisa
                  </a>

                  <span class="text-sm text-gray-500 ">On:March, 24</span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={ganesha}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Ganesh Chalisa
                  </a>

                  <span class="text-sm text-gray-500 ">On: March, 24</span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={durga}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Durga Chalisa
                  </a>

                  <span class="text-sm text-gray-500">On: March, 24</span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={sai}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Sai Chalisa
                  </a>

                  <span class="text-sm text-gray-500">On: March, 24</span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={shanidev}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Shanidev Chalisa
                  </a>

                  <span class="text-sm text-gray-500">On: March, 24</span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={shiva}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    Shiv Chalisa
                  </a>

                  <span class="text-sm text-gray-500">On: March, 24</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
