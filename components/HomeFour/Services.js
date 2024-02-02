import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <section className="services-area ptb-100 bg-F4F7FC">
                    <div className="container">
                        <div className="section-title">
                          {/*   <span className="sub-title">What We Do</span>*/}
                            <h2>Our benefits</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='health'>
                                    <div className="icon">
                                        <i className="fas fa-heartbeat"></i>
                                    </div>
                                    <h3>
                                        <Link href="/life#health">
                                            <a>Comprehensive Health Plans</a>
                                        </Link>
                                    </h3>
                                    <p>We make your wellbeing a priority, so you can get the care you need at the right time.</p>

                                   {/* <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>  */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='support'>
                                    <div className="icon bg-00aeff">
                                        <i className="fas fa-hands-helping"></i>
                                    </div>
                                    <h3>
                                        <Link href="/life#support">
                                            <a>Family Support</a>
                                        </Link>
                                    </h3>
                                    <p>Parental leaves for childbirth or adoption and day care services, so you get the support you need to succeed.</p>

                                  {/*   <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='time'>
                                    <div className="icon bg-f78acb">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <h3>
                                        <Link href="/life#time">
                                            <a>Flexible Work Timings</a>
                                        </Link>
                                    </h3>
                                    <p>Why juggle your responsibilities when you can maintain a healthy work-life balance?</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='wellness'>
                                    <div className="icon bg-cdf1d8">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <h3>
                                        <Link href="/life#wellness">
                                            <a>1-to-1 Wellness Programs</a>
                                        </Link>
                                    </h3>
                                    <p>Get confidential 24x7 e-counseling, wellness coaching, online health risk assessment tools, e-workshops, and advice on personal issues.</p>

                                   {/*  <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='friday'>
                                    <div className="icon bg-c679e3">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <h3>
                                        <Link href="/life#friday">
                                            <a>Easing Into The Weekend – No Calls On Friday Afternoons</a>
                                        </Link>
                                    </h3>
                                    <p>The second half of Fridays are set as silent hours to reclaim your focus.</p>

                                  {/*   <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box" id='paid'>
                                    <div className="icon bg-eb6b3d">
                                        <i className="fas fa-dollar-sign"></i>
                                    </div>

                                    <h3>
                                        <Link href="/life#paid">
                                            <a>Paid Time Off (PTO)</a>
                                        </Link>
                                    </h3>

                                    <p>Vacation days, sick leave, and paid holidays are standard benefits to ensure employees have time for rest and relaxation.</p>

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

export default Services;