import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar/Nav";
// import Nav from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products/Products";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact";
import End from "./components/footer/Footer";
import Whatsapp from "./components/Whatsapp";
import ProgressBar from "./components/progressbar/ProgressBar";
import SingleProduct from "./pages/SingleProduct";
import Login from "./components/login/Login";
import TermsCond from "./pages/TermsCond";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Register from "./pages/auth/Register";
import Error from "./pages/error/Error";
import CartPage from "./pages/addtocart/CartPage";
import SingleBlog from "./pages/Blogs/Single-Blog";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./pages/user/Dashboard";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import CreateCategory from "./pages/admin/CreateCategory";
import UpdateProduct from "./pages/admin/UpdateProduct";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Product from "./pages/admin/Product";
import Search from "./pages/search";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <Toaster />
      <ProgressBar />
      <Nav />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/search" Component={Search} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/products" Component={Products} exact />
        <Route path="/blogs" Component={Blogs} exact />
        <Route path="/single-blog/:id" Component={SingleBlog} exact />
        <Route path="/contact" Component={Contact} exact />
        <Route path="/single-product/:id" Component={SingleProduct} exact />
        <Route path="/login" Component={Login} exact />
        <Route path="/privacy-policy" Component={PrivacyPolicy} exact />
        <Route path="/terms-conditions" Component={TermsCond} exact />
        <Route path="/refund-policy" Component={RefundPolicy} exact />
        <Route path="/register" Component={Register} exact />
        <Route path="/cart-page" Component={CartPage} exact />
        {/* <Route path="/admindashboard" Component={AdminDashboard} exact /> */}
        <Route path="/forgot-password" Component={ForgotPassword} exact />
        <Route path="*" Component={Error} exact />
        <Route path="/dashboard" Component={PrivateRoute} exact>
          <Route path="user" Component={Dashboard} exact />
          <Route path="user/orders" Component={Orders} exact />
          <Route path="user/profile" Component={Profile} exact />
        </Route>
        <Route path="/dashboard" Component={AdminRoute}>
          <Route path="admin" Component={AdminDashboard} />
          <Route path="admin/create-category" Component={CreateCategory} />
          <Route path="admin/products" Component={Product} />
          <Route path="admin/product/:slug" Component={UpdateProduct} />
          <Route path="admin/create-product" Component={CreateProduct} />
          <Route path="admin/users" Component={Users} />
        </Route>
      </Routes>
      <div className="w-full relative">
        <End />
      </div>
      <Whatsapp />
    </>
  );
}

export default App;
