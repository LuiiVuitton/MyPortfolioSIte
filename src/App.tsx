import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath2 from "./assets/MyImage.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Index/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import imagePath4 from "./assets/C2A-Website2.png";
import Contact from "./pages/Contact";

import resume from "./assets/ServiceDeskResume- Luis Ventura.pdf";
import imagePath7 from "./assets/CarApp.png";
import videoPath from "./assets/CarAppVideo.mp4";
import imagePath8 from "./assets/AWS-CCP.png";
import imagePath9 from "./assets/MC-AA.png";

function App() {
  return (
    <div>
      <NavBar resumeSrcPath={resume} />
      <Home imageSrcPath={imagePath2} />
      <About resumeSrcPath={resume} />
      <Projects
        imageSrcPath={imagePath4}
        imageSrcPath2={imagePath7}
        videoSrcPath={videoPath}
        imageSrcPath3={imagePath8}
        imageSrcPath4={imagePath9}
      />
      <Contact />
    </div>
  );
}

export default App;
