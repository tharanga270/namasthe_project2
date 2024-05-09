import React, { useEffect, useState } from 'react';
import { CarouselTransition } from '../../Components/Carousel/Index';
import Autism from '../../Components/Autism/Index';
import WeDo from '../../Components/WhatWeDo/Index';
import CabCommunity from '../../Components/Cabcommunity/Index';
import NeedToJoin from '../../Components/NeedToJoin/Index';
import FooterCarousel from '../../Components/FooterCarousel/Index';
import GSPreloader from './../../Components/GSPreloader/index';
const Home = () => {
  const togglePreloader = () => {
    // Call preloader.active(true) to open the preloader, preloader.active(false) to close it
    preloader.active(!preloader.active());
  };

  let preloader = null;
  return (
    <div>
      {/* <GSPreloader/> */}
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
