interface AboutProps {
  imageSrcPath: string;
}

function About({ imageSrcPath }: AboutProps) {
  return (
    <div id="About">
      <div className="about-section mt-5 py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>About Me</h2>
              <p>
                I'm passionate about technology and love creating amazing web
                experiences. I specialize in front-end development and enjoy
                working with React and TypeScript.
              </p>
              <p>Here are some of my skills:</p>
              <ul className="skills-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={imageSrcPath}
                      alt="First slide"
                      className="d-block w-100"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First Slide</h5>
                      <p>Description for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://via.placeholder.com/600x400"
                      alt="Second slide"
                      className="d-block w-100"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second Slide</h5>
                      <p>Description for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://via.placeholder.com/600x400"
                      alt="Third slide"
                      className="d-block w-100"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third Slide</h5>
                      <p>Description for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
