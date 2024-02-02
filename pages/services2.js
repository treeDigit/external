import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ServicesOverview from '../components/ServicesTwo/ServicesOverview';
import WhatWeDo from '../components/Services/WhatWeDo';
import OurServices from '../components/ServicesTwo/OurServices';
import Footer from '../components/Layout/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />

               {/* <PageHeader 
                    pageTitle=" Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo=" Services" 
                />  */}

                <ServicesOverview />
                <WhatWeDo />

              {/*   <OurServices />*/}
                
                <Footer />
            </>
        );
    }
}

export default Services2;