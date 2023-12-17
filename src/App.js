import "./App.css";
// import Autism from "./Components/Autism/Index";
// import CabCommunity from "./Components/Cabcommunity/Index";
// import ProjectCard from "./Components/Card/Index";
// import { CarouselTransition } from "./Components/Carousel/Index";
// import Cara from "./Components/Carousel/test";
// import Carousel from "./Components/Carousel/testing";
import Footer from "./Components/Footer/Index";
// import FooterCarousel from "./Components/FooterCarousel/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
// import WeDo from "./Components/WhatWeDo/Index";
import { Routes, Route } from "react-router-dom";
// import Team from "./Pages/Team/Index";
// import GlobalTeam from "./Pages/GlobalTeam/Index";
// import SLTeam from "./Pages/SLTeam/Index";
// import Footer1 from "./Components/Footer/test";
import Home from "./Pages/Home/Index";
// import NeedJoin from "./Pages/NeedToJoin/Index";
// import LearnMore from "./Pages/LearnMore/Index";
// import ProjectObjectives from "./Pages/ProjectObjectives/Index";

function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
