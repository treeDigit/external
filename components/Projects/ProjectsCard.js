import React, { Component } from 'react'
import Link from 'next/link'

class ProjectsCard extends Component {
  render() {
    return (
      <>
        <div className='projects-area ptb-160'>
          <div className='container-fluid'>
            <h2
              style={{
                textAlign: 'center',
                marginTop: '160px',
               
              }}
            >
            Join the Expedition!
            </h2>
            <div className='row' style={{marginTop:40}}>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/animate-img2.jpg' alt='image' />
                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/project-details'>
                        <a className='carrer-detail'>AWS Solution Architect</a>
                      </Link>
                    </h3>
                    {/*  <span className="category">Design</span> */}
                  </div>

                  {/*   <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div> */}
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/animate-img.jpg' alt='image' />

                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/Career-Backend'>
                        <a className='carrer-detail'> Backend-End Developer</a>
                      </Link>
                    </h3>
                    {/*   <span className="category">Planing</span> */}
                  </div>

                  {/*   <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div> */}
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/Career10.jpg' alt='image' />

                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/Career-Node'>
                        <a className='carrer-detail'> Node.js Developer</a>
                      </Link>
                    </h3>
                    {/*   <span className="category">Marketing</span> */}
                  </div>

                  {/*  <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div> */}
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/Career8.jpg' alt='image' />

                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/Career-Fullstack'>
                        <a className='carrer-detail'>Full-Stack Developer</a>
                      </Link>
                    </h3>
                    {/*   <span className="category">Development</span> */}
                  </div>

                  {/*    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>  */}
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/Career2.jpg' alt='image' />

                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/Career-manager'>
                        <a className='carrer-detail'>Manager–Scrum Master</a>
                      </Link>
                    </h3>
                    {/*   <span className="category">Design</span> */}
                  </div>

                  {/*  <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div> */}
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-projects-box'>
                  <img src='/images/it-banner/Career4.jpg' alt='image' />

                  <div
                  // className='projects-content'
                  >
                    <h3>
                      <Link href='/Career-Architect'>
                        <a className='carrer-detail'>Full-Stack Architect</a>
                      </Link>
                    </h3>
                    {/*  <span className="category">Development</span> */}
                  </div>

                  {/*  <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectsCard
