import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projets from "./components/Projets";
import Temoignage from "./components/Temoignage";
import MeContacter from "./components/MeContacter";
import Footer from "./components/Footer";
import SessionScrollY from "./components/SessionScrollY";
import Plans from "./components/Plans";
import AnimeTxt from "./components/AnimeTxt";

function App() {
  return (
    <div className=" bg-[#1a1a1a] text-white  font-SatoshiRegular	">
      <NavBar/>
      <Home/>
      <div >
        <About/>
        {/* <Skills/> */}
        {/* <AnimeTxt/> */}
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
