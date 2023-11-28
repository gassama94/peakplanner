// ProjectManagement.js
import React from 'react';
import Button from './Button';
import { Input } from 'postcss';
import Modal from './Modal';
import Navbar from './NavBar';
import NewProject from './NewProject';
import NewProjectSelected from './NoProjectSelected';
import NewTask from './NewTask';
import Tasks from './Tasks';
import SelectedProject from './SelectedProject';
import CustomAlert from './CustomAlert';


function ProjectManagement() {
  return <div>
    <>
    <Button/>
    <Input/>
    <Modal/>
    <Navbar/>
    <NewProject/>
    <NewProjectSelected/>
    <NewTask/>
    <Tasks/>
    <SelectedProject/>
    <CustomAlert/>
    <axiosDefaults/>
    
    </>
   
  </div>;
}

export default ProjectManagement;