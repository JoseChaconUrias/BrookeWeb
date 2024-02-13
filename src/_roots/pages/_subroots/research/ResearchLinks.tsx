{/* test */}
const ResearchLinks = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute text-white text-center mt-12 fade-in">
        <h1 className="text-4xl">Research papers that are contributing to my research</h1>
        <div className="mt-4">
          <p className="underline font-bold"><a href="https://www.nature.com/articles/s41522-023-00393-5">Biofilms and Microbiomes</a></p>
          <p className="underline font-bold"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8890394/">National Library of Medicine: Gut Microbes</a></p>
          <p className="underline font-bold"><a href="https://www.jbc.org/article/S0021-9258(22)00892-4/fulltext">Journal of Biology Chemsitry</a></p>
          <p className="underline font-bold"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9286219/">National Library of Medicine: PLOS Pathogens</a></p>
        </div>
      </div>
    </div>
  );
};

export default ResearchLinks;
