import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="fade-in">
        <div className="text-2xl p-4">
          <h1 className="flex items-center justify-center text-white">About Me</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/about/early-life"
            className="p-16 flex items-center justify-center bg-violet-300 text-white font-bold rounded shadow-xl hover:bg-violet-400"
          >
            Early Life
          </Link>
          <Link
            to="/about/university-life"
            className="p-16 flex items-center justify-center bg-violet-300 text-white font-bold rounded shadow-xl hover:bg-violet-400"
          >
            University Life
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
