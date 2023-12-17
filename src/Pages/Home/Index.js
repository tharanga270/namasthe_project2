import React from "react";
import { CarouselTransition } from "../../Components/Carousel/Index";
import Autism from "../../Components/Autism/Index";
import WeDo from "../../Components/WhatWeDo/Index";
import CabCommunity from "../../Components/Cabcommunity/Index";
import NeedToJoin from "../../Components/NeedToJoin/Index";
import FooterCarousel from "../../Components/FooterCarousel/Index";
const Home = () => {
  return (
    <div>
      <CarouselTransition />
      <Autism />
      <WeDo />
      <CabCommunity />
      <NeedToJoin />
      <FooterCarousel />
    </div>
  );
};

export default Home;
