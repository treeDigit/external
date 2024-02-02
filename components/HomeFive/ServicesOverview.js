import React, { Component } from 'react'
import Link from 'next/link'

class ServicesOverview extends Component {
  render() {
    return (
      <section className='overview-area ptb-100'>

<div style={{textAlign: 'center',paddingBottom: 90}}><h2>Our Expertise</h2></div>

        <div className='container'>
          {/*  <div className="overview-box it-overview">
                
                       <div className="overview-content">

                          <div className="content">
                                <h2>Digital Marketing</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            SEO Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Email Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Facebook Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Data Scraping
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Social Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Youtube Marketing
                                        </span>
                                    </li>
                                </ul>

                                <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service1.png" alt="image" />
                            </div>
                        </div>
                    </div>
 */}

          <div className='overview-box it-overview'>
          
            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service2.png' alt='image' />
              </div>
            </div>

            <div className='overview-content'>
              <div className='content right-content'>
                <h2>Web Design & Development</h2>
                <p>
                  In the dynamic landscape of the digital era, our organization
                  specializes in transformative Web Design & Development
                  services tailored to elevate your online presence. Crafting
                  visually stunning and user-centric websites, we seamlessly
                  blend responsive design with cutting-edge technologies.
                </p>

                <ul className='features-list'>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Responsive Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      UI / UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      AWS Solution Architect
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Node.Js Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      React Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Next.js Development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='overview-box it-overview'>
            <div className='overview-content'>
              <div className='content'>
                <h2>Cloud Storage & Support Services</h2>
                <p>
                Unlock the power of seamless data management with our cutting-edge cloud storage 
                solutions. Say goodbye to traditional storage constraints and embrace the 
                agility of the cloud. Enjoy unparalleled scalability, cost-efficiency, and 
                accessibility for your data. Whether it's secure backup solutions, 
                collaborative file sharing, or robust application data storage, 
                our cloud storage services are tailored to meet the diverse needs of your business.
                From technical support to strategic consulting services, we are committed to guiding you through every step of your cloud journey.{' '}
                </p>

                <ul className='features-list'>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Cloud Database
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Hybrid Cloud
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Email Servers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Website Hosting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      File Storage
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Backup Systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Cost Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Technical Support
                    </span>
                  </li>
                </ul>

                {/*   <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>*/}
              </div>
            </div>

            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service3.png' alt='image' />
              </div>
            </div>
          </div>

          {/*   <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service4.png" alt="image" />
                            </div>
                        </div>

                     
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <h2>SEO Consultancy</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Content Marketing</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> SEO Optimization</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Social Marketing</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>
                            </div>  
                        </div>
                    </div> */}
        </div>
      </section>
    )
  }
}

export default ServicesOverview
