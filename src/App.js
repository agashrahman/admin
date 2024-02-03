import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Admin from "./components/admin";

import CreateAdminProfile from "./components/createProfile/CreateAdminProfile";
import CreateTrainerProfile from "./components/createProfile/CreateTrainerProfile";
import CreateStudentsProfile from "./components/createProfile/CreateStudentsProfile";
import AdminDetails from "./components/Details/AdminDetails";
import StudentDetails from "./components/Details/StudentDetails";
import TraineeDetails from "./components/Details/TraineeDetails";
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Details from './components/Details/details';
import Admin from './components/admin';
import ClockHome from './components/hameCard/clock';
import { FirstHome } from './components/hameCard/homeCars';
import StudentAttendance from './components/attendance/attendance';
import Batch from './components/AddBatch/AddBatch';
import MilestoneTable from './components/Mileston/Mileston';
import SideBar from './components/nav/sidbar';
import Profile from './components/MyProfile/myProfile';
import Mode from './components/model/Mode';
import Branch from './components/Branch/Branch';
import Category from './components/category/category';
import DashNavbar from './components/nav/nav';








function App() {
  return (
   
      <BrowserRouter>
  <Routes>
    
    <Route path="/" element={[<Admin/>]}></Route>
    <Route path="/CreateAdminProfile" element={[<CreateAdminProfile/>]}></Route>
    <Route path="/CreateTrainerProfile" element={[<CreateTrainerProfile/>]}></Route>
    <Route path="/Signupss" element={[<CreateStudentsProfile/>]}></Route>
    <Route path="/AdminDetails" element={[<AdminDetails/>]}></Route>
    <Route path="/StudentDetails" element={[<StudentDetails/>]}></Route>
    <Route path="/TraineeDetails" element={[<TraineeDetails/>]}></Route>
    <Route path="/Details" element={[<Details/>]}></Route>
    <Route path="/StudentAttendance" element={[<StudentAttendance/>]}></Route>
    <Route path="/Batch" element={[<Batch/>]}></Route>
    <Route path="/MilestoneTable" element={[<MilestoneTable/>]}></Route>
    <Route path="/Mode" element={[<Mode/>]}></Route>
    <Route path="/Branch" element={[<Branch/>]}></Route>
    <Route path="/Category" element={[<Category/>]}></Route>
    
    
  </Routes>
  </BrowserRouter>





   
  );
}

export default App;
