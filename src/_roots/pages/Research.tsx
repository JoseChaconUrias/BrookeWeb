import { Link } from "react-router-dom";

const Research = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="fade-in">
        <div className="text-2xl p-4">
          <h1 className="flex items-center justify-center text-white">
            My Research Career at the Univesity of Nebraska-Lincoln
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Link
            to="/research/cdiff"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            Research at UNL
          </Link>

          <Link
            to="/research/future-research"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            Future Research
          </Link>
          <Link
            to="/research/timeline"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            Timeline
          </Link>
          <Link
            to="/research/research-links"
            className="p-16 flex items-center justify-center outline outline-white outline-8 text-white font-bold rounded shadow-xl hover:bg-rose-950"
          >
            Research Links
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Research;
