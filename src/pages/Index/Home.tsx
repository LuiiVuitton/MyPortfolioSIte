// Home.tsx

interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  return (
    <div id="Home">
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <div
              className="rounded-circle overflow-hidden mx-auto"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                src={imageSrcPath}
                className="img-fluid"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h1 className="display-4 mb-3">Hello, I'm Luis Ventura</h1>
            <p className="lead">
              I'm a Software Engineer with a love for creating innovative and
              user-friendly web applications.
            </p>
            <p>Let's work together and create something amazing!</p>
            <div className="mt-4">
              <a href="#Contact" className="btn btn-primary me-3">
                Contact Me
              </a>
              <a href="#Projects" className="btn btn-outline-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
