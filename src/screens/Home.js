import React from "react";
import Carousel from "./Carousel";
import Offers from "./Offers";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div id="#home">
        <Carousel />
        <Cards />
        <Offers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
