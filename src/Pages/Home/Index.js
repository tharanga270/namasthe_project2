import React from "react";
import { CarouselTransition } from "../../Components/Carousel/Index";
import Autism from "../../Components/Autism/Index";
import WeDo from "../../Components/WhatWeDo/Index";
const Home = () => {
  return (
    <div>
      <CarouselTransition />
      <Autism />
      <WeDo />
    </div>
  );
};

export default Home;
