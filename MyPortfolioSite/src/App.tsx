import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/react.svg";
import imagePath2 from "./assets/MyImage.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Index/Home";
function App() {
  return (
    <div>
      <NavBar imageSrcPath={imagePath} />
      <Home imageSrcPath={imagePath2} />
    </div>
  );
}

export default App;
