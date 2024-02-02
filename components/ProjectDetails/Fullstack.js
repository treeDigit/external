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
                                        <p>We are seeking a skilled and experienced Next.js Developer to join our team. As a Next.js Developer, he/she will be responsible for front-end design, UI/UX implementation, and API integration. You will collaborate with the team, create creative designs, and ensure smooth integration of APIs into our applications. This is a remote position with flexible working hours.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Role - Full-Stack Developer</h4>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Location:</h4>
                                        <p>Hydrabad/Banglore/WFH</p>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Responsibilities:</h4>
                                        <ul>
                                      <li>Minimum 2-3 years of experience in Next.js development.</li>
                                      <li>Expertise in Next.js frameworks, HTML, CSS and exposure to React.js and AWS.</li>
                                      <li>Strong understanding of REST APIs and experience in API integration.</li>
                                      <li>Proficiency in using tools like Postman for API testing and debugging.</li>
                                      <li>Experience in developing production-level applications using Redux or similar state management libraries.</li>
                                      <li>Basic understanding of backend flow to effectively collaborate with backend developers.</li>
                                      <li>Strong problem-solving skills and attention to detail.</li>
                                      <li>Good communication and teamwork skills.</li>
                                      <li>Ability to work independently and meet project deadlines.</li>
                                      

                                       </ul>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Must-Have Skills:</h4>
                                        <ul>
                                       <li>Design and implement user interfaces using React and Next.js.</li>
                                       <li>Collaborate with the team to create visually appealing and user-friendly designs.</li>
                                       <li>Integrate APIs into the front-end application.</li>
                                       <li>Ensure the responsiveness and performance of the application.</li>
                                       <li>Work with tools like Postman to test and debug APIs.</li>
                                       <li>Collaborate with back-end developers to understand the backend flow.</li>
                                       <li>Develop production-level applications using Redux or other suitable tools</li>
                                       <li>tay up-to-date with the latest trends and best practices in front-end development.</li>
                                       
                                       </ul>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Qualification:</h4>
                                       <ul>
                                        <li>Bachelor of Science in Computer Science, Telecommunications, Information Technology, or other related fields.</li>
                                       
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