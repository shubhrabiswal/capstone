import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsZone from './Components/DoctorsZone/DoctorsZone';
import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';
import Prescription from './Components/Prescription/Prescription';
import Settings from './Components/Settings/Settings';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import PetZone from './Components/PetZone/PetZone';
import PetZone1 from './Components/PetZone/PetZone1';
import golden from './Components/PetZone/golden';
import LoginDoc from './Components/Login/LoginDoc';
  
function App() { 
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctorsZone">
            <DoctorsZone></DoctorsZone>
          </Route>
          <Route path="/petzone">
            <PetZone1></PetZone1>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route path="/prescription">
            <Prescription></Prescription>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/logindoctor">
            <LoginDoc></LoginDoc>
          </Route>
          <Route path="/golden">
            <golden></golden>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
