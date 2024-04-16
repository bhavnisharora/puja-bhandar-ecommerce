import React from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Products from "../components/homeProduct/HomeProducts";
// import Register from "../components/Register";
import Manter from "../components/Manter";
import Services from "../components/Services";
import LatestProduct from "../components/LatestProduct";
import { useAuth } from "../components/context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      <Manter />
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      <Hero />
      <Description />
      <Products />
      <LatestProduct />
      <Services />
    </div>
  );
};

export default Home;
