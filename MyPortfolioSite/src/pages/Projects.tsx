import React from "react";

function Projects() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* First Card */}
        <div className="col mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
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
  );
}

export default Projects;
