import { FaHome } from "react-icons/fa"; // Importing Font Awesome icons
import { IoMdPerson } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface NavProps {
  resumeSrcPath: string;
}

function NavBar({ resumeSrcPath }: NavProps) {
  return (
    <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
                <FaHome />
                {"    "}Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#About">
                <IoMdPerson />
                {"    "}About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Projects">
                <FaTools />
                {"    "}Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Contact">
                <IoMdMail />
                {"    "}Contact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <PiLinkSimpleBold />
                {"    "}Links
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://github.com/LuiiVuitton?tab=overview&from=2024-01-01&to=2024-01-07"
                  >
                    <FaGithub />
                    {"    "}Github
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.linkedin.com/in/luis-ventura-ab5819246/"
                  >
                    <FaLinkedin />
                    {"    "}LinkedIn
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href={resumeSrcPath}>
                    <FaDownload />
                    {"    "}Resume
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
