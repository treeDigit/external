import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectDetailsContent from '../components/ProjectDetails/Manager-scrum';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

              {/*   <PageHeader 
                    pageTitle="Manager–Scrum Master" 
                    breadcrumbTextOne="Careers" 
                    breadcrumbUrl="/projects" 
                    breadcrumbTextTwo="Manager–Scrum Master" 
                /> */}

                <ProjectDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;