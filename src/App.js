import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Cover from "./components/Cover/Cover";
import Cover2 from "./components/Cover/Cover2";
import AISolutions from "./components/aiSolutions/aiSolutions";
import Technology from "./components/technologies/technology";
import OurSolution from "./components/OurSolution/OurSolution";
import Research from "./components/research/research"
import NewsApp from "./components/IntelsenceNews/News";
import Motivation from "./components/motivation/motivation";
import WorkAreaApp from "./components/aiAbout/WorkArea";

function App() {
  return (
    <div>
     <Navbar />
        <WorkAreaApp/>
      {/*<Cover />*/}
      {/*<AISolutions />*/}
      {/*<Technology />*/}
      {/*<Cover2 />*/}
      {/*<OurSolution />*/}
      {/*<Research />*/}
      {/*<NewsApp />*/}
      {/*<Motivation />*/}
    </div>
  );
}

export default App;
