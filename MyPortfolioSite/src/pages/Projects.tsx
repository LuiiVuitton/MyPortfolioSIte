interface ProjectProps {
  imageSrcPath: string;
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
                <h5 className="card-titledf">c2analyticsolutions</h5>
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
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Feature 1</li>
                <li className="list-group-item">Feature 2</li>
                <li className="list-group-item">Feature 3</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Feature 1</li>
                <li className="list-group-item">Feature 2</li>
                <li className="list-group-item">Feature 3</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
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
