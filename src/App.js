import './App.css';
import React from 'react';
import Footer from './Components/Footer/Index';
import { NavbarWithMegaMenu } from './Components/Navbar/Index';
import { Routes, Route } from 'react-router-dom';
import Team from './Pages/Team/Index';
import GlobalTeam from './Pages/GlobalTeam/Index';
import SLTeam from './Pages/SLTeam/Index';
import Home from './Pages/Home/Index';
import NeedJoin from './Pages/NeedToJoin/Index';
import LearnMore from './Pages/LearnMore/Index';
import ProjectObjectives from './Pages/ProjectObjectives/Index';
import Events from './Pages/Events/Index';
import NormalEvents from './Pages/NormalEvents';
import Contact from './Pages/Contact/Index';
import Resources from './Pages/Resources/Index';
import OngoingResearch from './Pages/OngoingResearch';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/global" element={<GlobalTeam />} />
        <Route path="/SLteam" element={<SLTeam />} />
        <Route path="/join" element={<NeedJoin />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/projectobj" element={<ProjectObjectives />} />
        <Route path="/main-events" element={<Events />} />
        <Route path="/normal-events" element={<NormalEvents />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/ongoing-research" element={<OngoingResearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
