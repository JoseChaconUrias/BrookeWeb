import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 bg-zinc-950 text-white shadow">
      <Link
        to="/home"
        className={`mx-6 sm:mx-4 lg:mx-20 hover:text-xl text-sm sm:text-base ${
          location.pathname === "/home" ? "underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/research"
        className={`mx-6 sm:mx-4 lg:mx-20 hover:text-xl text-sm sm:text-base ${
          location.pathname === "/research" ? "underline" : ""
        }`}
      >
        Research
      </Link>
      <Link
        to="/about"
        className={`mx-6 sm:mx-4 lg:mx-20 hover:text-xl text-sm sm:text-base ${
          location.pathname === "/about" ? "underline" : ""
        }`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`mx-6 sm:mx-4 lg:mx-20 hover:text-xl text-sm sm:text-base ${
          location.pathname === "/contact" ? "underline" : ""
        }`}
      >
        Contact
      </Link>
    </header>
  );
};

export default MenuBar;
