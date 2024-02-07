import { Outlet } from "react-router-dom";
import MenuBar from "../../../components/MenuBar";

const SubRootLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div>
        <MenuBar />
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default SubRootLayout;
