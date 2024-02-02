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
                                <div className="projects-details-desc" style={{marginTop:60}}>
                                    <h3>Company - TreeDigit</h3>

                                    <p>TreeDigit is a full-service digital marketing agency that builds great consumer experiences. We are one of the fastest growing private companies and continue to set ourselves an open mind and accept opportunities and possibilities.</p>
                                   
                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Job Description:</h4>
                                        <p>We are seeking a skilled and experienced scrum master who can join our team. He/she will be leading large Agile program-project engagements across a vertical and helping them adopt the agile mindset and practices. The ideal candidate should be highly proficient in lean and agile - values & principles.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Role - Manager–Scrum Master</h4>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Location:</h4>
                                        <p>Hydrabad/Banglore/WFM</p>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Job Summary:</h4>
                                        <ul>
                                            <li>You will be leading large Agile program-project engagements (multiple scrum/kanban teams) across a vertical and helping them adopt the agile mindset and practices. The ideal candidate should be highly proficient in lean and agile - values & principles.</li>
                                            <li>Experienced in Scaled (SAFe, LeSS) agile frameworks and related tools.</li>
                                            <li>Looking for L4 level self-motivated candidates with fairly good communication skills who want to pursue their career as an Agile practitioner in the long run.</li>
                                            <li>The ideal candidate should have Software development and Project/Program Management/Delivery.</li>
                                            
                                        </ul>
                                        
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Responsibilities:</h4>
                                        <ul>
                                     <li>Can lead enterprise product/programs (scrum/Kanban/XP teams) and inculcate the awareness of agility within team.</li>
                                     <li>Drive all the ceremonies for the scrum teams and track the backlog conversion work.</li>
                                     <li>Helping team and PO/PM in story writing and organizing the requirement components.</li>
                                     <li>Coach teams through the journey of agile adoption with appropriate frameworks.</li>
                                     <li>Evaluate and advise scalable Agile Frameworks, tools, and techniques to the team, as applicable.</li>
                                     <li>Organizing Metrics for team and stakeholders to have transparency and visibility in release work.</li>
                                     <li>Helping verticals and organizations in doing the agile maturity assessment periodically.</li>
                                     <li>Helping the team in removing the impediments for smoother scrum/iteration cycles.</li>
                                     
                                     
                                       </ul>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Qualification:</h4>
                                        <ul>
                                       <li>7 to 10 - years of overall experience in the IT Industry as a Developer/Tester/BA.</li>
                                       <li>3 to 4 - years of experience as scrum master (SAFe, LeSS framework) & agile project management delivery.</li>
                                       <li>Some understanding of design thinking and systems thinking preferable.</li>
                                       <li>Good to have Atlassian JIRA, MS ADO, Atlassian Confluence, MS SharePoint, Rally, MS Excel skills.</li>
                                       <li>Good to have: Relevant Agile advanced certifications (Lean Kanban/Scrum Alliance/ Scrum.org/Disciplined Agile).</li>
                                       <li>Should have played significant role in end-to-end Agile transformation programs.</li>
                                       <li>Expertise in Scrum and Kanban is mandatory and experience in LeSS or Scrum@Scale or other frameworks are preferred.</li>
                                       <li>Experience working with multiple delivery and business partners teams project management best practices.</li>
                                       <li>Coaching skills at distinct levels of the Organizations (Portfolio, ART, and Teams) • Experience in Automotive/ Auto-ancillary industry is preferred.</li>
                                       <li>Working Knowledge of tools like MS Office, Power BI reports.</li>
                                       <li>Outstanding Communication skills, both written and verbal.</li>
                                       <li>Experience in Client Facing roles - mandatory.</li>
                                       
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