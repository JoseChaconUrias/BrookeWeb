import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Home } from "./_roots/pages";
import RootLayout from "./_roots/RootLayout";
import Research from "./_roots/pages/Research";
import Contact from "./_roots/pages/Contact";
import { Cdiff, FutureResearch, ResearchLinks, Timeline } from "./_roots/pages/_subroots/research";
import { EarlyLife } from "./_roots/pages/_subroots/about";
import UnvisersityLife from "./_roots/pages/_subroots/about/UniversityLife";
import SubRootLayout from "./_roots/pages/_subroots/SubRootLayout";
import About from "./_roots/pages/About";

const App = () => {
  return (
    <main>
      { /* public routes */ }
      <Routes>
        { /* main pages */ }
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home /> } />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

          {/* subpages */}
        <Route element={<SubRootLayout />}>
          { /* research subpages */ }
          <Route path="/research/cdiff" element={<Cdiff />} />
          <Route path="/research/future-research" element={<FutureResearch />} />
          <Route path="/research/timeline" element={<Timeline />} />
          <Route path="/research/research-links" element={<ResearchLinks />} />

          { /* about subpages */ }
          <Route path="/about/early-life" element={<EarlyLife />}/>
          <Route path="/about/university-life" element={<UnvisersityLife />}/>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
