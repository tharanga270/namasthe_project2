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

function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="/team" element={<Team />}></Route>
      </Routes>

      <Routes>
        <Route path="/global" element={<GlobalTeam />}></Route>
      </Routes>

      <Routes>
        <Route path="/SLteam" element={<SLTeam />}></Route>
      </Routes>

      <Routes>
        <Route path="/join" element={<NeedJoin />}></Route>
      </Routes>

      <Routes>
        <Route path="/learn-more" element={<LearnMore />}></Route>
      </Routes>

      <Routes>
        <Route path="/projectobj" element={<ProjectObjectives />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
