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
                                        <p>We are seeking a skilled and experienced AWS Solution Architect who can join our team. He/She will be leading large scale programs and propose the solution. The ideal candidates should be highly proficient in AWS cloud.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Role - Full-Stack Architect</h4>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Location:</h4>
                                        <p>Hydrabad/Banglore</p>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Responsibilities:</h4>
                                        <ul>
                                       <li>Enhance our cloud capability by creating and implementing cloud patterns.</li>
                                       <li>Develop and implement ways to move apps and workloads to the cloud.</li>
                                       <li>Work closely with business leads and product owners to understand solution requirements and identify architectural patterns.</li>
                                       <li>Write and develop cloud automation playbooks for managing and scaling containers, hosts, cloud services, and applications.</li>
                                       <li>Monitor compliances of resources to see if they fit industry guardrails and best practices.</li>
                                       <li>Help other development and engineering teams resolve application to platform integration issues for Platforms as a Service(Paas) and Infrastructure as a Services (Iaas) services.</li>
                                       <li>Research and propose solutions for AWS data trasformation, data connections, operational frameworks, and application integration.</li>
                                       <li>Work closely with lead architects and engineers to create and maintain architectual templates and build/operational documents.</li>
                                       <li>Work with DevOps and engineering teams to develop services catalogs.</li>
                                      
                                       </ul>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Must-Have Skills:</h4>
                                        <ul>
                                        <li>Strong knowledge and practical experience with AWS.</li>
                                       <li>Strong programming skills with experience in webhook and API development using Node.js, Ruby,Python,Shell, and PowerShell.</li>
                                       <li>Familarity with modern cloud application architecture.</li>
                                       <li>Exposure to cloud managed servises and microservices like Function as a Service, Containers, and managed databases.</li>
                                       <li>Thorough understanding og ML, data analysis, data visualization, and event event-driven architecture.</li>
                                       <li>Familiarity working with large systems.</li>
                                       <li>Experience with setting up load balancers, cloud networks, and virtual servers.</li>
                                       <li>Strong oral and written communication skills.</li>
                                       <li>Self-motivated with the ability to work in a team or independently.</li>
                                       <li>Capable of working under tight deadlines.</li>
                                       
                                       </ul>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Qualification:</h4>
                                       <ul>
                                        <li>Bachelor of Science in Computer Science, Telecommunications, Information Technology, or other related fields.</li>
                                        <li>AWS cloud certification.</li>
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