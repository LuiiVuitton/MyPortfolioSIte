import { LuConstruction } from "react-icons/lu";

interface ProjectProps {
  imageSrcPath: string;
  imageSrcPath2: string;
}

function Projects({ imageSrcPath }: ProjectProps) {
  return (
    <div id="Projects">
      <div className="container mt-5">
        <div className="text-center">
          {" "}
          {/* Center the heading */}
          <h1>Projects</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* First Card */}
          <div className="col mb-4">
            <div className="card">
              <img
                src={imageSrcPath}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-titled">c2analyticsolutions</h5>
                <p className="card-text">
                  Designed and deployed a fully responsive front-end website,
                  while maintaining a Git workflow.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">AWS S3 Bucket</li>
                <li className="list-group-item">AWS Route 53</li>
                <li className="list-group-item">AWS CloudFront</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://c2analyticsolutions.com/"
                  className="card-link"
                >
                  c2analyticsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x165"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Coming soon...</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <LuConstruction />
                </li>
                <li className="list-group-item">
                  <LuConstruction />
                </li>
                <li className="list-group-item">
                  <LuConstruction />
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  <LuConstruction />
                </a>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x165"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Coming soon...</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <LuConstruction />
                </li>
                <li className="list-group-item">
                  <LuConstruction />
                </li>
                <li className="list-group-item">
                  <LuConstruction />
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  <LuConstruction />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
