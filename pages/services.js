import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import WhyChooseUs from '../components/Services/WhyChooseUs';
import WhatWeDo from '../components/Services/WhatWeDo';
import Footer from '../components/Layout/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

              {/*  <PageHeader 
                    pageTitle="Services " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services " 
                /> */} 

                <WhyChooseUs />

                <WhatWeDo />
                
                <Footer />
            </>
        );
    }
}

export default Services;