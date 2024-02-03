import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser,faUserPlus, faBookMedical,faClock,faFileCirclePlus,faChartLine,faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


const Sidebar = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}style={{ marginTop: '5rem' }}>
      {!isSidebarOpen && (
        <button className="toggle-button ms-4 mt-4 " onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      {isSidebarOpen && (
        <button className="close-button" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
  
      <div className='sidebar_mainDiv ms-4 mt-4 '>
      <ul>
          <Link to={"/"}><li className='sidenavicon'>
          <FontAwesomeIcon className="sidebar_icons m-0 me-4" icon={faHome} />Home
          </li></Link>

          <li className="dropdown">
              <a href="#"> <FontAwesomeIcon className="sidebar_icons " icon={faFileCirclePlus} /> Create Profile</a>
              <div className="dropdown-content">
              <Link to={"/CreateAdminProfile"}><li className="nav-item">Create Admin Profile</li></Link>
              <Link to={"/CreateTrainerProfile"}> <li className="nav-item">Create Trainee Profile</li></Link>
              <Link to={"/Signupss"}><li className="nav-item">Create Student Profile</li></Link>
              
              </div>
            </li>


            <li className="dropdown">
              <a href="#"> <FontAwesomeIcon className="sidebar_icons" icon={faList} /> Details</a>
              <div className="dropdown-content">
              <Link to={"/AdminDetails"}><li className="nav-item">Admin Details</li> </Link>
              <Link to={"/TraineeDetails"}><li className="nav-item">Trainee Details</li></Link>
              <Link to={"/StudentDetails"}><li className="nav-item">Student Details</li></Link>
              
              </div>
            </li>
            <Link to={"/Batch"}><li className='sidenavicon'>
          <FontAwesomeIcon className="sidebar_icons m-0 me-5"    icon={faBookMedical} />Add batch
          </li></Link>

          <Link to={"/Mode"}><li className='sidenavicon'>
          <FontAwesomeIcon className="sidebar_icons  m-0 me-5"    icon={faBookMedical} />Mode
          </li></Link>

          <Link to={"/StudentAttendance"}>
            <li><FontAwesomeIcon className="sidebar_icons m-0 me-4" icon={faUserPlus} /> Attendance</li></Link>
             
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons " icon={faUser} />My Profile
          </li>
          
          <Link to={"/Branch"}><li className='sidenavicon'>
          <FontAwesomeIcon className="sidebar_icons  m-0 me-5"    icon={faBookMedical} />Branch
          </li></Link>
          
          <Link to={"/Category"}><li className='sidenavicon'>
          <FontAwesomeIcon className="sidebar_icons  m-0 me-5"    icon={faBookMedical} />Category
          </li></Link>

          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons " icon={faPeopleGroup} />About Us
          </li>
        </ul>
      </div>
    </div>
  );

  const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
    
      const closeSidebar = () => {
        setSidebarOpen(false);
      };

      return(
        <div className=''>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
   </div>
      )
    };
export default SideBar;