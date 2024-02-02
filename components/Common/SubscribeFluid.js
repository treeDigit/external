import React, { Component } from 'react';

class SubscribeFluid extends Component {
    render() {
        return (
            <>
                <section className="subscribe-area bg-F4F7FC">
                    <div className="container-fluid p-0">
                        <div className="subscribe-inner-area jarallax" data-jarallax='{"speed": 0.3}'>
                            <div className="subscribe-content">
                                <span className="sub-title">Get Started Instantly!</span>
                                <h2>Get In Touch With Our Creative Team!</h2>

                                <form className="newsletter-form">
                                   {/*  <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" />*/}
                                    <button type="submit" style={{backgroundColor:"purple"}}>Contact Us</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img2">
                        <img src="/images/shape/shape2.svg" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/images/shape/shape4.png" alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src="/images/shape/shape5.png" alt="image" />
                    </div>
                    <div className="shape-img6">
                        <img src="/images/shape/shape6.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default SubscribeFluid;