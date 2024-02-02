import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectDetailsContent from '../components/ProjectDetails/Backend';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

              {/*   <PageHeader 
                    pageTitle="Back-End Developer" 
                    breadcrumbTextOne="Careers" 
                    breadcrumbUrl="/projects" 
                    breadcrumbTextTwo="Back-End Developer" 
                /> */}

                <ProjectDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;