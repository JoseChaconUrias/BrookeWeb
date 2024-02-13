import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import TwinklingStars from "../components/TwinklingStars";

const RootLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background for all main pages 
      <img
        src="assets/img/background.svg"
        alt="background"
        className="object-cover w-full h-full fixed top-0 left-0"
      />
      */}

      <video
        src="assets/virusBg.mp4" autoPlay loop muted
        className="object-cover w-full h-full fixed top-0 left-0"
      />

      <div>
        <MenuBar />
      </div>
      
      <div>
        <TwinklingStars/>
      </div>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
