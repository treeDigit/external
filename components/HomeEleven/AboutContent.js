import React, { Component } from "react";
import Link from "next/link";

export default class AboutContent extends Component {
  render() {
    return (
      <>
        <div className="cs-about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="cs-about-image">
                  <img
                    src="/images/cyber-security-home/about.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="cs-about-content">
                  <span className="sub-title">ABOUT TAIKER</span>
                  <h3>
                    Secure Your Clicks, <span>Secure Your</span> Business
                    Reputation
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work hand-in-hand with industry-leading
                    brands to help redefine the possibilities and potential.
                  </p>

                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <div className="cs-about-card">
                        <div className="icon">
                          <i className="fa-solid fa-lock"></i>
                        </div>
                        <h4>Endpoint Security</h4>
                        <p>
                          Lorem ipsum dolor sit amet, is demo consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="cs-about-card">
                        <div className="icon">
                          <i className="fa-solid fa-shield"></i>
                        </div>
                        <h4>High Quality Services</h4>
                        <p>
                          Lorem ipsum dolor sit amet, is demo consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about-btn">
                    <Link href="/contact">
                      <a className="default-btn">
                        Get Started <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
