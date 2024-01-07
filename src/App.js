import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SessionConception from "./components/SessionConception";
import Projets from "./components/Projets";
import Temoignage from "./components/Temoignage";
import MeContacter from "./components/MeContacter";
import Footer from "./components/Footer";
import SessionScrollY from "./components/SessionScrollY";
import Plans from "./components/Plans";

function App() {
  return (
    <div className=" bg-[#c7c7c7]  font-SatoshiRegular	">
      <NavBar/>
      <Home/>
      <div className="bg-neutral-950 text-white">
        <About/>
        <Skills/>
        <SessionConception/>
        <SessionScrollY/>
        <Projets/>
        <Temoignage/>
        <Plans/>
        <MeContacter/>
        <Footer/>
      </div>
      </div>
        );
}

export default App;
