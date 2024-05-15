import React, { useEffect, useState } from 'react';
import { CarouselTransition } from '../../Components/Carousel/Index';
import Autism from '../../Components/Autism/Index';
import WeDo from '../../Components/WhatWeDo/Index';
import CabCommunity from '../../Components/Cabcommunity/Index';
import NeedToJoin from '../../Components/NeedToJoin/Index';
import FooterCarousel from '../../Components/FooterCarousel/Index';
import Preloader from './../../Components/Preloader/index';
const Home = () => {
  // const togglePreloader = () => {
  //   // Call preloader.active(true) to open the preloader, preloader.active(false) to close it
  //   preloader.active(!preloader.active());
  // };

  // let preloader = null;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? <Preloader /> : <></>}
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
