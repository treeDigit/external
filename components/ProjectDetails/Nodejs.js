import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Lightbox from 'react-image-lightbox';

{/* const images = [
    '/images/projects-image/project6.jpg',
    '/images/projects-image/project6.jpg'
]*/}

class ProjectDetailsContent extends Component {
    state = {
        isOpen: false,
        photoIndex: 0,
        isOpenImage: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <>
                 <div className="project-details-area ptb-100">
                   <div className="container">
                       <div className="row">
                           {/*  <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src="/images/projects-image/project5.jpg" alt="projects" />

                                    <div
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="btn popup-youtube"
                                    > 
                                        <i className="flaticon-play-button"></i>
                                    </div>
                                </div>
                            </div>

                           
                            <ModalVideo 
                                channel='youtube' 
                                isOpen={this.state.isOpen} 
                                videoId='szuchBiLrEM' 
                                onClose={() => this.setState({isOpen: false})} 
                            />

                            <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src="/images/projects-image/project6.jpg" alt="projects" />
 
                                    <div 
                                        className="btn popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </div>
                            </div> 

                            {isOpenImage && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpenImage: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )} */}

                            <div className="col-lg-12 col-md-12">
                                <div className="projects-details-desc" style={{marginTop:50}}>
                                    <h3>Company - TreeDigit</h3>

                                    <p>TreeDigit is a full-service digital marketing agency that builds great consumer experiences. We are one of the fastest growing private companies and continue to set ourselves an open mind and accept opportunities and possibilities.</p>
                                   
                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Job Description:</h4>
                                        <p>We are seeking a skilled and experienced Node.js developer who can join our team. He/she will be working as a front-end developer, understand and build the requirements. The ideal candidate should be highly proficient in Front-end or full-stack development.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Role - Node.js Developer</h4>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Location:</h4>
                                        <p>Hydrabad/Banglore/WFH</p>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Responsibilities:</h4>
                                        <ul>
                                      <li>Maintaining and developing server-side network components.</li>
                                      <li>Maintaining the optimal performance of our central database and ensuring responsiveness to any front-end requests.</li>
                                      <li>Collaborating with front-end application developers on element integration.</li>
                                      <li>Writing efficient, reusable, and testable code used in high-performance applications.</li>
                                      <li>Documenting Node.js processes and database schemas, and preparing adequate reports.</li>
                                      <li>Implementing and recommending improvements to technologies and processes.</li>
                                     
                                      
                                      
                                       </ul>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Must-Have Skills:</h4>
                                        <ul>
                                      <li>In-depth knowledge of Node.js frameworks such as Express.js and Koa.js.</li>
                                      <li>In-depth knowledge of JavaScript, frameworks, libraries, and web stacks.</li>
                                      <li>Extensive knowledge of front-end tech like CSS3 and HTML5.</li>
                                      <li>Availability to urgently resolve pressing web application issues outside of regular business hour.</li>
                                      
                                       </ul>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Qualification:</h4>
                                       <ul>
                                       <li>3-5 experience as a Node.js engineer.</li>
                                      <li>Bachelor’s degree in computer science, engineering, or a related field.</li>
                                      
                                       </ul>

                                       <div className="btncareer">
                                    <Link href="/contact">
                            <a className="career-btn">
                               Apply  <span></span>
                            </a>
                        </Link>
                    </div>
                                        
                                    </div>



                                  {/*   <div className="project-details-info">
                                        <div className="single-info-box">
                                            <h4>Client</h4>
                                            <span>James Anderson</span>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Category</h4>
                                            <span>Network, Marketing</span>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Date</h4>
                                            <span>February 28, 2020</span>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Share</h4>
                                            <ul className="social">
                                                <li>
                                                    <Link href="/project-details#">
                                                        <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details#">
                                                        <a target="_blank"><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details#">
                                                        <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details#">
                                                        <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="single-info-box">
                                            <Link href="/project-details#">
                                                <a className="default-btn">Live Preview <span></span></a>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </>
        );
    }
}

export default ProjectDetailsContent;