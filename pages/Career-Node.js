import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectDetailsContent from '../components/ProjectDetails/Nodejs';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

              {/*  <PageHeader 
                    pageTitle="Node.js Developer" 
                    breadcrumbTextOne="Careers" 
                    breadcrumbUrl="/projects" 
                    breadcrumbTextTwo="Node.js Developer" 
                /> */} 

                <ProjectDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;