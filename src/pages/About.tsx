interface AboutProps {
  imageSrcPath: string;
  imageSrcPath2: string;
  imageSrcPath3: string;
}

function About({ imageSrcPath, imageSrcPath2, imageSrcPath3 }: AboutProps) {
  return (
    <div id="About">
      <div className="about-section mt-5 py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>About Me</h2>

              <p>
                When I'm not coding, you'll find me exploring the latest trends
                in tech, and experimenting with personal projects. I specialize
                in front-end development and enjoy working with React and
                Typescript.
              </p>
              <p>Here are some of my skills:</p>
              <ul className="skills-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
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
                      style={{ borderRadius: "30px" }} // Apply border-radius inline
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={imageSrcPath2}
                      alt="Second slide"
                      className="d-block w-100"
                      style={{ borderRadius: "30px" }} // Apply border-radius inline
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={imageSrcPath3}
                      alt="Third slide"
                      className="d-block w-100"
                      style={{ borderRadius: "30px" }} // Apply border-radius inline
                    />
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
      <hr></hr>
    </div>
  );
}

export default About;
