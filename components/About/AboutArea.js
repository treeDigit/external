import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-160">
                    <div className="container" style={{marginTop:150}}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image" >
                                    <img src="/images/about-img1.png" alt="image"  />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content"  id='digital'>
                                 {/*   <span className="sub-title">About Us</span>  */}
                                    <h2>We Are Digital Explorers</h2>
                                    <p>TreeDigit as an agency is a rapidly growing focused digital agency providing the full spectrum of services required for digital assets of an organization. Our Offerings are: Digital strategy, Design & Planning Migration, Testing, and Maintenance Application and content support services Project creation, classification, and Gold Configuration on the horizon Gateway Environment.</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Recommender systems</span></li>
                                        <li><span><i className="fas fa-check"></i> Demand prediction</span></li>
                                        <li><span><i className="fas fa-check"></i> Omnichannel analytics</span></li>
                                        <li><span><i className="fas fa-check"></i> Lead generation</span></li>
                                        <li><span><i className="fas fa-check"></i> Dedicated Developers</span></li>
                                        <li><span><i className="fas fa-check"></i> BAU Support</span></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-title' style={{paddingTop:78}} > <h3>Core Competencies</h3></div>
                       

                        <div className="about-inner-area">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text" id="our-skills">
                                        <h3>Our Skill's</h3>
                                        <p>We take pride in our exceptional and diverse skill set that empowers us to deliver innovative solutions in the ever-evolving IT landscape. </p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Content Management System (CMS) UMBRACO</li>
                                            <li><i className="flaticon-tick"></i> Cloud Storage Service (AWS)</li>
                                            <li><i className="flaticon-tick"></i> Full-Stack Development</li>
                                            <li><i className="flaticon-tick"></i> Mobile Application Development</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text" id="our-mission">
                                        <h3>Our Mission</h3>
                                        <p>TreeDigit's primary vision is to serve our clients with a profound understanding of their business domain areas and to provide expert solutions to their business needs.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                            <li><i className="flaticon-tick"></i> Expect more</li>
                                            <li><i className="flaticon-tick"></i> Good thinking</li>
                                            <li><i className="flaticon-tick"></i> In real we trust</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text" id="our-benefits">
                                        <h3>Our Benefits</h3>
                                        <p>We Help you live your best life and make your wellbeing a priority, so you can get the care you need at the right time.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Comprehensive Health Plans</li>
                                            <li><i className="flaticon-tick"></i> Family Support</li>
                                            <li><i className="flaticon-tick"></i> Flexible Work Timings</li>
                                            <li><i className="flaticon-tick"></i> 1-to-1 Wellness programs</li>
                                            <li><i className="flaticon-tick"></i> Easing Into The Weekend – No calls on Friday afternoons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img3">
                        <img src="/images/shape/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/shape2.svg" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default AboutArea;