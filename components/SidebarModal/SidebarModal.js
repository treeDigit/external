import React, { Component } from 'react';
import Link from 'next/link';

export class SidebarModal extends Component {
    state = {
        modal: false
    };
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    render() {
        return (
            <>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>TreeDigit as an agency is a rapidly growing focused digital agency providing the full spectrum of services required for digital assets of an organization. Our Offerings are: Digital strategy, design & planning Migration, Testing, and maintenance Application and content support services Project creation, classification, and Gold Configuration on the horizon Gateway Environment.</p>
                            </div>
                        </div>

                        <div className="sidebar-instagram-feed">
                            <h2>Instagram</h2>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image1.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image2.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image3.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image4.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image5.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image6.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image7.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="/images/blog-image/blog-image8.jpg" alt="image" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <span className="main-color">
                                        +91 7386782411
                                        </span>
                                        <span className="or">OR</span>
                                        <span>support@treedigit.com</span>
                                    </h2>
            
                                    <ul className="social">
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-close"></i>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarModal;