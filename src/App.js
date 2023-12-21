import "./App.css";
import Footer from "./Components/Footer/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
import { Routes, Route } from "react-router-dom";
import Team from "./Pages/Team/Index";
import GlobalTeam from "./Pages/GlobalTeam/Index";
import SLTeam from "./Pages/SLTeam/Index";
import Home from "./Pages/Home/Index";
import NeedJoin from "./Pages/NeedToJoin/Index";
import LearnMore from "./Pages/LearnMore/Index";
import ProjectObjectives from "./Pages/ProjectObjectives/Index";
import Events from "./Pages/Events/Index";
function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/global" element={<GlobalTeam />} />
        <Route path="/SLteam" element={<SLTeam />} />
        <Route path="/join" element={<NeedJoin />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/projectobj" element={<ProjectObjectives />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
