import React, { Component } from 'react';
import Link from 'next/link';

class LatestWorks extends Component {
    render() {
        return (
            <div className="works-area ptb-100">
                <div className="container">
                  <div className="section-title">
                       {/*  <h2>Our Latest Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    */}
                    </div> 

 
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work1.jpg" alt="image" />
                                
                                <div className="content text-center">
                                 {/*    <span>
                                        <Link href="/projects">
                                           <a>Development</a>
                                        </Link>
                                    </span> */}

                                    <h3>
                                     <Link href="/services2">
                                     <a>Business Strategy and Planning</a>
                                     </Link>

                                    </h3>
                                   <Link href="/services2">
                                     <a  className="work-btn">Read More</a>
                                     </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work2.jpg" alt="image" />
                                
                                <div className="content text-center">
                                  {/*   <span>
                                        <Link href="/projects">
                                            <a>Web Design</a>
                                        </Link>
                                    </span> */}
                                    <h3>
                                        <Link href="/services2">
                                            <a>Web Design & Development</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/services2">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/cloud3.jpg" alt="image" />
                                
                                <div className="content text-center">
                                 {/*    <span>
                                        <Link href="/projects">
                                            <a>eCommerce</a> 
                                        </Link>
                                    </span> */}
                                    <h3>
                                        <Link href="/services2">
                                            <a>Cloud Storage & Support Services</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/services2">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/test3.jpg" alt="image"  />
                                
                                <div className="content text-center">
                                {/*    <span>
                                        <Link href="/projects">
                                           <a>React</a> 
                                        </Link>
                                    </span> */} 
                                    <h3>
                                        <Link href="/services2">
                                            <a>Migration, Testing & maintainance</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href=" /services2">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work3.jpg" alt="image" />
                                
                                <div className="content text-center">
                                  {/*   <span>
                                        <Link href="/projects">
                                            <a>Angular</a>
                                        </Link>
                                    </span> */}
                                    <h3>
                                        <Link href="/services2">
                                            <a>Content Support Services</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/services2">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work6.jpg" alt="image" />
                                
                                <div className="content text-center">
                                  {/*  <span>
                                        <Link href="/projects">
                                            <a>Development</a>
                                        </Link>
                                    </span> */} 
                                    <h3>
                                        <Link href="/services2">
                                            <a>Quality & Knowledge</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/services2">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more-work">
                        <Link href="/services2">
                            <a className="default-btn">
                                Read More  <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestWorks;