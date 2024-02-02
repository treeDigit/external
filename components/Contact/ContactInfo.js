import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h3>Email Here</h3>
                                <p>
                                support@treedigit.com
                                </p> <br/> <br/>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h3>Location Here</h3>
                                <p> TreeDigit Solutions Private Limited,<br/> Hanuman Nagar, Gandhi Chowk,Yadgir, Karnataka, India - 585201.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-marker"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>+91 7386782411</p>
                              <br/>
                              <br/> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactInfo;