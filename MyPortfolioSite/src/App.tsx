import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/react.svg";
import imagePath2 from "./assets/MyImage.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Index/Home";
import About from "./pages/About";
import imagePath3 from "./assets/background1.jpg";
import Projects from "./pages/Projects";
import imagePath4 from "./assets/C2A-Website.png";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <NavBar imageSrcPath={imagePath} />
      <Home imageSrcPath={imagePath2} />
      <About imageSrcPath={imagePath3} />
      <Projects imageSrcPath={imagePath4} />
      <Contact />
    </div>
  );
}

export default App;
