// Home.tsx

interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={imageSrcPath}
            className="img-fluid rounded-circle"
            alt="Profile"
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="display-4 mb-3">Hello, I'm Luis Ventura</h1>
          <p className="lead">
            I'm a passionate Front-End Developer with a love for creating
            innovative and user-friendly web applications.
          </p>
          <p>Let's work together and create something amazing!</p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-primary me-3">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
