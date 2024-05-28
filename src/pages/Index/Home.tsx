// Home.tsx
interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  return (
    <div id="Home" style={{ paddingBottom: "40px" }}>
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
            <h1 className="display-4 mb-3">
              Hello, I'm <span style={{ color: "dodgerblue" }}>Luis</span>{" "}
              Ventura
            </h1>
            <p className="lead">
              I'm a{" "}
              <span style={{ color: "dodgerblue" }}>IT Support Technician</span>{" "}
              my commitment to excellent customer service and efficient
              problem-solving drives me to deliver top-notch support in every
              interaction.
            </p>
            <p>Simplifying Technology, Enhancing Productivity.</p>
            <div className="mt-4">
              <a href="#Contact" className="btn btn-info me-3">
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
