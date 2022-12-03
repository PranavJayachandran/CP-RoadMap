import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import CodingPlatforms from "./components/CodingPlatforms";
import BetterLanguage from "./components/BetterLanguage";
import Consistency from "./components/Consistency";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding-platforms" element={<CodingPlatforms />} />
        <Route path="/better-language" element={<BetterLanguage />} />
        <Route path="maintain-consistency" element={<Consistency />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
