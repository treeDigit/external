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
                                        <p>We are seeking a skilled and experienced Back-end developer who can join our team. He/she will be working as a Back-end developer, understand and build the requirements. The ideal candidate should be highly proficient in Back-end or full-stack development.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Role - Back-End Developer</h4>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Location:</h4>
                                        <p>Hydrabad/Banglore/WFH</p>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Responsibilities:</h4>
                                        <ul>
                                       <li>Create codes, build prototypes, and test them.</li>
                                       <li>Organize and analyse data and processes to identify any problem and improve the key areas.</li>
                                       <li>Design strong APIs that support mobile and desktop clients.</li>
                                       <li>Use the cloud to manage data and systems.</li>
                                       <li>Collaborate with the front-end developers and other team members to set objectives and design robust, functional codes.</li>
                                       <li>Enhance the user-end experience.</li>
                                       <li>Develop new, innovative, and in-demand concepts for programs, features, and products from the industry.</li>
                                       <li>Optimize web applications for improved performance and scalability.</li>
                                       <li>Develop automated tests to see if business needs are fulfilled.</li>
                                       <li>Lead projects if necessary.</li>
                                      
                                       </ul>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Must-Have Skills:</h4>
                                        <ul>
                                        <li>Proficiency in algorithms and web design.</li>
                                       <li>Hands-on experience with programming languages like Java, PHP, Ruby, and Python.</li>
                                       <li>Significant experience developing highly secure web applications.</li>
                                       <li>Considerable experience with core AWS web-enabling technologies.</li>
                                       <li>Growth mindset and problem-solving skills.</li>
                                       <li>Significant experience designing RESTful APIs.</li>
                                       <li>Significant coding experience and skills with technologies such as: Python Frameworks (Django, Flask, or Pyramid), FastAPI, SQL, Elasticsearch, ORMs, etc.</li>
                                       <li>Good analytical and time-management skills.</li>
                                       </ul>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Qualification:</h4>
                                       <ul>
                                        <li>Bachelor of Science in Computer Science and equivalent experience.</li>
                                        
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