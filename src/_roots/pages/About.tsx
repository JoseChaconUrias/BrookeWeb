import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="fade-in">
        <div className="text-2xl p-4">
          <h1 className="flex items-center justify-center text-white">About Me</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Link
            to="/about/early-life"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            Early Life
          </Link>
          <Link
            to="/about/university-life"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            University Life
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
