import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <section className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                           
                                            <a href="tel:7386782411">+91 7386782411</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Do You Have a Question?</span>
                                            <a href="mailto:support@treedigit.com">support@treedigit.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-social-media"></i>
                                            <span>Socials Network</span>

                                            <ul className="social">
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services2">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/careers">
                                                <a>Careers</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/life">
                                                <a>Life At TreeDigit</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>


                                   {/*      <li>
                                            <Link href="/contact">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Shop</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Shop</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/conatct">
                                                <a>Support</a>
                                            </Link>
                                        </li>  */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Instagram</h3>

                                    <ul className="footer-instagram-post">
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img1.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img2.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img3.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img4.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img5.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img6.jpg" alt="image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} TreeDigit. 
                                        All rights reserved. <a href="#" target="_blank"></a>
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;