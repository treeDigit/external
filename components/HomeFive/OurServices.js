

import React, { Component } from "react";


export default class OurFeatures extends Component {
  render() {
    return (
      <>
        <div className="bd-featured-area pt-100 pb-70">
          <div className="container"  >
            <div className="section-title with-line-text-with-white-color" >
             {/*  <span className="sub-title">OUR FEATURED</span> */}
              <h2>
              Our Agile Workflow
              </h2>
              <p> With our time-tested 100% agile development process, get swift solutions to your challenges rapidly & efficiently. We deliver high-quality software solutions, and exceed customer expectations in today's dynamic IT landscape.</p>
            </div>


            <style jsx>{`
                .bd-featured-card {
                  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); 
                 
                }
              `}</style>

            <div className="row justify-content-center" >
              <div className="col-lg-3 col-sm-6" >
                <div className="bd-featured-card text-center" >
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/fun-facts/work-experience.png"
                      alt="image"
                    />
                  </div>
                 {/*  <h3>Supply Chain</h3> */}
                  <p>
                   Idea Discovery Turning Market Opportunities into ideas, Project Planning, Prioritizing Goals & Product Roadmap.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/fun-facts/intellectual-property.png"
                      alt="image"
                    />
                  </div>
                {/*   <h3>Predictive Maintenance</h3> */}
                  <p>
                  Product Designing Layering, Innovative Design, Thinking and Developing high-impact solutions and services.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/fun-facts/inspection.png"
                      alt="image"
                    />
                  </div>
                 {/*  <h3>IT Optimization</h3> */}
                  <p>
                  QA Testing, Releasing Safe Solutions & Features. Creating checks for functionality, usability, security,  performance of the website.


                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/fun-facts/idea (2).png"
                      alt="image"
                    />
                  </div>
                 {/*  <h3>Critical Infrastructure</h3> */}
                  <p>
                  Maintenance & Optimization
                  Implementing SEO best practices and Ensuring Non-stop Performing Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bd-featured-shape">
            <img src="/images/big-data-home/featured/shape.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}





