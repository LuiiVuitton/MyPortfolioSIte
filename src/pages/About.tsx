interface AboutProps {
  resumeSrcPath: string;
}

function About({ resumeSrcPath }: AboutProps) {
  return (
    <div id="About" className="bg-dark text-light py-5 ">
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 order-lg-2">
            {/* Change order to 2 for the image column on larger screens */}
            <h1>About me</h1>

            <p className="lead">
              A passionate Software Engineer based in Gaithersburg, MD.
            </p>
            <p>
              When I'm not coding, I love exploring the latest tech trends and
              working on creative projects. My expertise lies in front-end
              development, and I enjoy crafting beautiful and responsive web
              applications using React and TypeScript.
            </p>

            <div className="row mt-4">
              <div className="col text-center">
                <a
                  href={resumeSrcPath}
                  className="btn btn-info btn-lg"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
