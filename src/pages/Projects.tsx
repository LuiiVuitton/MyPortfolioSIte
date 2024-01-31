import { LuConstruction } from "react-icons/lu";
import "./Project.css";

interface ProjectProps {
  imageSrcPath: string;
  imageSrcPath2: string;
  videoSrcPath: string;
  imageSrcPath3: string;
  imageSrcPath4: string;
}

function Projects({
  imageSrcPath,
  videoSrcPath,
  imageSrcPath3,
  imageSrcPath4,
}: ProjectProps) {
  return (
    <div id="Projects">
      <div className="container mt-5">
        <div className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Video Embed (Replace the source with your video URL) */}
                <iframe
                  width="100%"
                  height="315"
                  src={videoSrcPath}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-lg-6">
                {/* Project Text */}
                <h2 className="section-heading text-uppercase mb-4">
                  Car Rental Application
                </h2>
                <p className="text-muted">
                  Developed and designed a car rental application using React
                  Native, GitHub, Git, and Expo Go. This mobile application aims
                  to provide users with a seamless and user-friendly experience
                  for renting cars on the go. The project was hand-coded to
                  ensure optimal performance and customization.
                </p>
                <p className="text-muted">
                  Future development of the application may include additional
                  features such as user reviews, advanced search filters, and
                  integration with external APIs for real-time vehicle
                  availability.
                </p>
              </div>
            </div>

            <hr></hr>

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
                    Designed and developed a fully responsive website using
                    React Typescript while maintaining a Git workflow, using
                    branches for new features.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    AWS S3 Bucket- to deploy site.
                  </li>
                  <li className="list-group-item">
                    AWS Route 53- to set up domain from google.
                  </li>
                  <li className="list-group-item">
                    AWS CloudFront- to improve performance and security.
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://c2analyticsolutions.com/"
                    className="card-link"
                  >
                    <button type="button" className="btn btn-primary">
                      View project
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath3}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    AWS Certified Cloud Practitioner
                  </h5>
                  <p className="card-text">
                    Currently pursuing: The "AWS Certified Cloud Practitioner"
                    Certification.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ETA: September 2024</li>
                  <li className="list-group-item">
                    <a
                      href="https://aws.amazon.com/certification/certified-cloud-practitioner/?gclid=Cj0KCQiA2eKtBhDcARIsAEGTG40o4GWk9I-tjO21JffqpCKM6yJq6dbe4X8WjizqVUanuwTTlzYdU8QaAozdEALw_wcB&trk=c228b2f7-f72a-429c-a18d-b8304f6391df&sc_channel=ps&ef_id=Cj0KCQiA2eKtBhDcARIsAEGTG40o4GWk9I-tjO21JffqpCKM6yJq6dbe4X8WjizqVUanuwTTlzYdU8QaAozdEALw_wcB:G:s&s_kwcid=AL!4422!3!683982754255!!!g!!!20851909384!165100744308"
                      className="card-link"
                    >
                      <button type="button" className="btn btn-primary">
                        View project
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath4}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Computer Science and Technologies Associates Degree
                  </h5>
                  <p className="card-text">
                    Currently pursuing: Information Sciences and Systems Area of
                    Concentration
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ETA: December 2024</li>
                  <li className="list-group-item">
                    Montgomery College: Rockville, MD
                  </li>

                  <li className="list-group-item">
                    <a
                      href="https://www.montgomerycollege.edu/academics/programs/computer-science-and-technologies/computer-science-technologies-aa-degree-information-sciences-and-systems-concentration.html"
                      className="card-link"
                    >
                      <button type="button" className="btn btn-primary">
                        View project
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
