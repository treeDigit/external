import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="portfolio-agency-banner pa-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container mt-80">
                            <div className="banner-content text-center">
                                <h1>Giving space for every meaningful aspiration</h1>
                                <p>At Treedigit, we know that growth begins at the intersection of problem-sovingand learning. And to achieve that, we need passionate people who apply analytical thought to deliver the best outcomes, who take ownership of what they do and the impact it creates, who can bring their enthusiasm for growth to Treedigit and eagerly go beyond possible with us.</p>
                                
                                <div className="banner-btn" style={{textAlign: 'center'}}>
                                    <Link href="/contact">
                                        <a className="default-btn mr-4">
                                            Get Started <span></span>
                                        </a>
                                    </Link>

                                   {/*  <Link href="/index9">
                                        <a className="default-btn-two">
                                            Try It Free <span></span>
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shape Images */}
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
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/images/shape/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;