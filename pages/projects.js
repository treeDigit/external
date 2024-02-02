import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsCard from '../components/Projects/ProjectsCard';
import Footer from '../components/Layout/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Careers" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Careers" 
                />

                <ProjectsCard />
                
                <Footer />
            </>
        );
    }
}

export default Projects;