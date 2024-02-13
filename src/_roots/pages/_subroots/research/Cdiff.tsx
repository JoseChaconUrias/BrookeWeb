import Analysis from "../../../../components/Analysis";
import DataCollection from "../../../../components/DataCollection";
import ResearchQuestions from "../../../../components/ResearchQuestions";
import Significance from "../../../../components/Significance";
import StateofPurpose from "../../../../components/StateofPurpose";

const Cdiff = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute bg-neutral-950 left-0 right-0 top-10 bottom-0 rounded overflow-y-auto">
        <div>
          <div className="p-8">

            {/* Title */}
            <div className="flex justify-center items-center text-white font-bold">
              <h1 className="text-2xl mb-8">
                Molecular determinants of Clostridioides difficile surface
                motility
              </h1>
            </div>

            {/* Paragraph 1 */}
            <div className="text-white">
              <h2 className="text-sm mb-2 underline font-bold">
                Background and Statement of Purpose
              </h2>
              <p className="text-sm">
                <StateofPurpose />
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="text-white mt-8">
              <h2 className="text-sm mb-2 underline font-bold">
                Significance of Research
              </h2>
              <p className="text-sm">
                <Significance />
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="text-white mt-8">
              <h2 className="text-sm mb-2 underline font-bold">
                Research Question
              </h2>
              <p className="text-sm">
                <ResearchQuestions />
              </p>
            </div>

            {/* Paragraph 4 */}
            <div className="text-white mt-8">
              <h2 className="text-sm mb-2 underline font-bold">
                Methods of Data Collection
              </h2>
              <p className="text-sm">
                <DataCollection />
              </p>
            </div>

            {/* Paragraph 5 */}
            <div className="text-white mt-8">
              <h2 className="text-sm mb-2 underline font-bold">
                Analysis of Data
              </h2>
              <p className="text-sm">
                <Analysis />
              </p>
            </div>

            {/* Layout of Images */}
            <div className="flex justify-center p-4 mt-8 gap-4 flex-wrap">
              <div className="md:w-1/3 flex flex-col items-center">
                <img
                  src="./assets/cdiff-img/positiveTwitching1.jpg"
                  alt="photo"
                  className="h-64 w-64 outline outline-white"
                />
                <h2 className="text-white text-sm flex justify-center mt-3">
                  Positive Twitching Fg.1
                </h2>                   
              </div>
              
              <div className="md:w-1/3 flex flex-col items-center">
                <img
                  src="./assets/cdiff-img/positive-twitching2.jpg"
                  alt="photo"
                  className="h-64 w-64 rotate-90 outline outline-white"
                />
                <h2 className="text-white text-sm flex justify-center mt-3">Positive Twitching Fg.2</h2>                
              </div>
              
              <div className="md:w-1/3 flex flex-col items-center">
                <img
                  src="./assets/cdiff-img/negative-twitching.jpg"
                  alt="photo"
                  className="h-64 w-64 outline outline-white"
                />      
                <h2 className="text-white text-sm flex justify-center mt-3">Negative Twitching Fg.3</h2>           
              </div>
            </div>
            {/* End of Images */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cdiff;
