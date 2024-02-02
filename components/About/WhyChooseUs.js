import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="why-choose-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-content">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>Our Value Proposition</h2>
                                    <p>We understand that in today's dynamic world, the right blend of technology and innovation is the key to achieving your goals. At Treedigit's, we don't just offer IT solutions; we provide the catalyst for your journey to success.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Innovation as a Core Value:</h4>
                                        <p>Embrace a culture of innovation, where creativity is nurtured, and new ideas are welcomed. </p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Continuous Learning and Development:</h4>
                                        <p>Prioritize ongoing learning and skill development. </p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Clear Goal Alignment:</h4>
                                        <p>Ensure that individual and team goals align with the overall mission and vision of the company.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;