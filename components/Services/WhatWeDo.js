import React, { Component } from 'react';
import Link from 'next/link';

class WhatWeDo extends Component {
    render() {
        return (
            <>
                <section className="services-area ptb-100 bg-F4F7FC">
                    <div className="container">
                     {/*    <div className="section-title">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide Awesome Service With Our Tools</h2>
                        </div> */}

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" >
                                    <div className="icon">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <h3>
                                        <Link href="/services2">
                                            <a>Business Strategy and Planning</a>
                                        </Link>
                                    </h3>
                                    <p>We partner with our clients to build digital solutions by briging righ technology and best user experience to develop an intutive digital experience.</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" >
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-research"></i>
                                    </div>
                                    <h3>
                                        <Link href="/services2">
                                            <a>Innovative Solutions, Websites</a>
                                        </Link>
                                    </h3>
                                    <p>Innovation, Design and development solutions as per business requirements. We create a bespoke plan to suit business.</p>

                                  {/*   <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" >
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <h3>
                                        <Link href="/services2">
                                            <a>Design & Content Specification</a>
                                        </Link>
                                    </h3>
                                    <p>Specialized and experienced enginners to support the applications. BAU dedicated application support team. support service for application. </p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" >
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-analysis"></i>
                                    </div>
                                    <h3>
                                        <Link href="/services2">
                                            <a>Migration, Testing & maintainance</a>
                                        </Link>
                                    </h3>
                                    <p>A website migration is a change to your website that's so significant it impacts the site's structure, performance, or traffic. The form of website migration is moving from one domain to another.</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" >
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <h3>
                                        <Link href="/services2">
                                            <a>Content Support Services</a>
                                        </Link>
                                    </h3>
                                    <p>Site support is a set of measures aimed at supporting and servicing the needs of a web resource. This service helps to controle stability of work and site updating. Professional service of a web page takes it to the next level.</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box"  id='Quality-Knowledge'>
                                    <div className="icon bg-eb6b3d">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h3>
                                        <Link href="/services2">
                                            <a>Quality & Knowledge</a>
                                        </Link>
                                    </h3>

                                    <p>Website QA (Quality Assurance) can be defined as the process of testing a website in order to discover mistakes, errors or oversights that may not have been noted during web development or design before going live.</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhatWeDo;