import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/react.svg";

function App() {
  return (
    <div>
      <NavBar brandName="Luis Ventura" imageSrcPath={imagePath} />
    </div>
  );
}

export default App;
