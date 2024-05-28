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
              An IT Support Technician based in Gaithersburg, MD.
            </p>
            <p>
              I have strong background in troubleshooting and resolving
              technical issues for both computer systems and networks. With a
              focus on delivering exceptional customer service, I strive to
              ensure seamless and efficient operations for all users.
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
