import React, { Component } from 'react';
import Link from 'next/link';
//test

class Error extends Component {
    render() {
        console.log(process.env.MY_VAR)
        return (
            <>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/images/404.png" alt="error" />
                
                                    <h3>NOT FOUND</h3>
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                    <Link href="/">
                                        <a className="default-btn">
                                            Go to Home <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Error;
