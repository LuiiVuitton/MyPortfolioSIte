import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath2 from "./assets/MyImage.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Index/Home";
import About from "./pages/About";
import imagePath3 from "./assets/Slide-5.jpg";
import Projects from "./pages/Projects";
import imagePath4 from "./assets/C2A-Website2.png";
import Contact from "./pages/Contact";
import imagePath5 from "./assets/Slide-2.jpg";
import imagePath6 from "./assets/Slide-4.jpg";
import resume from "./assets/Resume1- Luis Ventura.pdf";
import imagePath7 from "./assets/CarApp.png";
import videoPath from "./assets/CarAppVideo.mp4";
import imagePath8 from "./assets/AWS-CCP.png";
import imagePath9 from "./assets/MC-AA.png";

function App() {
  return (
    <div>
      <NavBar resumeSrcPath={resume} />
      <Home imageSrcPath={imagePath2} />
      <About
        imageSrcPath={imagePath3}
        imageSrcPath2={imagePath5}
        imageSrcPath3={imagePath6}
      />
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
