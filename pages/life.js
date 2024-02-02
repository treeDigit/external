import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeNine/Banner';
import BlogCard from '../components/Blog/BlogCard';

import Overview from '../components/HomeTwelve/Overview';
import Services from '../components/HomeFour/Services';
import Footer from '../components/Layout/Footer';

class Life extends Component {
    render() {
        return (
            <>
               <Navbar/>
                <Banner />
                <BlogCard />
               

                 <Overview />
                 <Services />
              
                <Footer/> 
            </>
        );
    }
}

export default Life;