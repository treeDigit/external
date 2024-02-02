

 import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (

<section className="pt-100 pb-70 gray-bg">
                <div className="container1">
                    <div className="row1">
                        <div className="col-lg-2 col-sm-2">
                             <div className="service-card-one bg-white center" id='Business'>
                                <div className="icon">
                                    <i className="bx bx-conversation"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Business Strategy and Planning</a>
                                    </Link>
                                </h3>
                                <p>We partner with our clients to build digital solutions by bringing the right technology and the best user experience to develop an intuitive digital experience.</p>
                            </div>
                        </div>



           
                        <div className="col-lg-2 col-sm-2">
                            <div className="service-card-one bg-white center" id='web'>
                                <div className="icon">
                                    <i className="bx bx-laptop"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Web Design & Development</a>
                                    </Link>
                                </h3>
                                <p>Innovation, Design and development solutions as per business requirements. We create a bespoke plan to suit business objectives. End to end responsible for designing, developing. </p>
                           
                        </div>

                        <div className="col-lg-2 col-sm-2">
                            <div className="service-card-one bg-white center design" id='content'>
                                <div className="icon">
                                    <i className="bx bxs-megaphone"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Cloud Storage & Support Services</a>
                                    </Link>
                                </h3>
                                <p>Specialized and experienced enginners to support the applications. 24x7 dedicated application support team. Best in class maintainance and support service.</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-2 test">
                            <div className="service-card-one bg-white center" id='testing'>
                                <div className="icon">
                                    <i className='bx bx-mobile-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Migration, Testing & Maintainance</a>
                                    </Link>
                                </h3>
                                <p> From smooth data migration and rigorous testing protocols to proactive maintenance strategies, we ensure your technology remains resilient, efficient, and future-ready.</p>
                            </div>
                        </div>

                      
    <div className="col-lg-2 col-sm-2">
    <div className="service-card-one bg-white center" id='support'>
        <div className="icon">
            <i className='bx bx-support'></i>
            <i className='bx bxs-badge-check check-icon'></i>
        </div>
        <h3>
            <Link href="/service-details">
                <a>Content Support Services</a>
            </Link>   
        </h3>
        <p>Site support is a set of measures aimed at supporting and servicing the needs of a web resource. This service helps to control stability of work and site updating.</p>
    </div>
</div>



                        <div className="col-lg-2 col-sm-2">
                            <div className="service-card-one bg-white center" id='quality'>
                                <div className="icon">
                                    <i className='bx bx-list-check'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Quality & Knowledge</a>
                                    </Link>
                                </h3>
                                <p>quality and knowledge are the cornerstones of our service. We adhere to the highest standards of quality assurance, delivering cutting-edge IT services that stand the test of time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default OurServices; 