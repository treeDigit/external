import React, { Component } from 'react'
import Link from 'next/link'

class ServicesOverview extends Component {
  render() {
    return (
      <section className='overview-area ptb-100'>
        <div className='container' style={{marginTop:50}}>
          <div id='it-services-section' className='overview-box it-overview' >
            <div className='overview-content' >
              <div className='content'>
                <h2> Business Strategy and Planning </h2>
                <p>
                  TreeDigit is your trusted partner for comprehensive IT
                  services and solutions tailored to meet the unique needs of
                  your business. With a proven track record of delivering
                  excellence, we blend innovation and expertise to drive your
                  success in the digital era.
                </p>
                <ul className='features-list'>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Managed IT Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Cloud Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Data Management
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Client-Centric Approach
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Consultation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Innovation
                    </span>
                  </li>
                </ul>

                {/*  <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>

            <div className='overview-image' >
              <div className='image'>
                <img src='/images/services/it-service1.png' alt='image' />
              </div>
            </div>
            <div id='development-section'></div>
          </div>

          <div className='overview-box it-overview' id='Innovative-Solutions-Websites'>
            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service2.png' alt='image' />
              </div>
            </div>

            <div className='overview-content'  >
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
                      Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Node.js Development
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

                {/*     <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>
            <div id='marketing-section'></div>
          </div>

          <div className='overview-box it-overview'>
            <div className='overview-content'>
              <div className='content' id='cloud-storage'>
                <h2>Cloud Storage & Support Services</h2>
                <p>
                  We offer a robust and scalable cloud storage infrastructure,
                  ensuring your data is always accessible and protected against
                  potential threats.. We specialize in delivering secure, scalable, 
                  and efficient solutions to meet your data storage and management needs in the cloud
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
                  {/* <li> */}
                    {/* <span> */}
                      {/* <i className='bx bxs-badge-check'></i> */}
                      {/* Email Servers */}
                    {/* </span> */}
                  {/* </li> */}
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Website Hosting
                    </span>
                  </li>
                  {/* <li> */}
                    {/* <span> */}
                      {/* <i className='bx bxs-badge-check'></i> */}
                      {/* File Storage */}
                    {/* </span> */}
                  {/* </li> */}
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Backup Systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Performance Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Data Migration and Integration
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Cost-Effective Options
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Monitoring and Support
                    </span>
                  </li>
                </ul>

                {/*    <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>

            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service3.png' alt='image' />
              </div>
            </div>
            <div id='mobile-development-section'></div>
          </div>

          <div className='overview-box' id='Migration-Testing-Maintainance'>
            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service4.png' alt='image' />
              </div>
            </div>

            <div className='overview-content'>
              <div className='content right-content'>
                <h2>Migration, Testing & Maintainance</h2>
                <p>
                  We redefine digital landscapes through strategic SEO
                  consultancy. As seasoned experts in search engine
                  optimization, we empower businesses to enhance their online
                  visibility, drive targeted traffic, and achieve sustainable
                  growth in the ever-evolving digital world.
                </p>

                <div className='features-text'>
                  <h4>
                  <i className='bx bxs-badge-check'></i> Migration
                  </h4>
                  <p>
                    We specialize in seamless migration services that empower
                    businesses to transition to new technologies, platforms, and
                    infrastructures with confidence.
                  </p>
                </div>

                <div className='features-text'>
                  <h4>
                  <i className='bx bxs-badge-check'></i> SEO Optimization
                  </h4>
                  <p>
                    SEO strategies and mobile optimization, we tailor our
                    approach to align seamlessly with your business objectives.
                  </p>
                </div>

                <div className='features-text'>
                  <h4>
                  <i className='bx bxs-badge-check'></i> Testing & maintainance
                  </h4>
                  <p>
                    Our dedicated team of experts specializes in rigorous
                    testing protocols, ensuring every aspect of your system
                    functions flawlessly.
                  </p>
                </div>
              </div>
            </div>
            <div id='qa-section'></div>
          </div>

          <div className='overview-box it-overview'>
            <div className='overview-content'>
              <div className='content' id='Content-Support-Services'>
                <h2>Content Support Services</h2>
                <p>
                At TreeDigit, we specialize in providing comprehensive content support services tailored to meet 
                the diverse needs of businesses aiming to enhance their online presence, engage their target 
                audience, and achieve their marketing goals. With a focus on creativity, strategy, and performance, 
                we offer a range of solutions designed to optimize every aspect of the content lifecycle.
                </p>

                <ul className='features-list'>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Strategic Content Planning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Content Creation and Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Search Engine Optimization (SEO)
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Customized Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Performance Analysis and Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Content Management Systems (CMS)
                    </span>
                  </li>
                </ul>

                {/*    <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>

            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service3.png' alt='image' />
              </div>
            </div>
            <div id='mobile-development-section'></div>
            <div id='it-section'></div>
          </div>

          <div className='overview-box it-overview'>
            <div className='overview-image'>
              <div className='image'>
                <img src='/images/services/it-service2.png' alt='image' />
              </div>
            </div>

            <div className='overview-content'>
              <div className='content right-content' id='Quality-Knowledge'>
                <h2>Quality & Knowledge</h2>
                <p>
                  We prioritize excellence in quality and knowledge across all our services and solutions. 
                  Through our comprehensive approach to quality assurance and knowledge management, we ensure 
                  that our clients receive reliable, efficient, and future-ready technology solutions that 
                  drive sustainable growth and competitive advantage.
                </p>

                <ul className='features-list'>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Quality Assurance Processes
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Continuous Learning and Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Compliance and Standards
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Knowledge Management Practices
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Client-Centric Approach
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bxs-badge-check'></i>
                      Innovation and Future-Readiness
                    </span>
                  </li>
                </ul>

                {/*     <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>
            <div id='marketing-section'></div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServicesOverview
