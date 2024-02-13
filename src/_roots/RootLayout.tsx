import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

const RootLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden">

      <video
        src="assets/virusBg.mp4" autoPlay loop muted
        className="object-cover w-full h-full fixed top-0 left-0"
      />

      <div>
        <MenuBar />
      </div>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
