import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectDetailsContent from '../components/ProjectDetails/ProjectDetailsContent';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

               {/*  <PageHeader 
                    pageTitle="AWS Solution Architect" 
                    breadcrumbTextOne="Careers" 
                    breadcrumbUrl="/projects" 
                    breadcrumbTextTwo="AWS Solution Architect" 
                /> */}

                <ProjectDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;