import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import photographer from './components/photographer';
//import Header from './components/Header.component';
import AddAppointment from './components/AddAppointment';
//import ExercisesList from "./components/exercises-list.component";
import EditAppointment from "./components/edit-appointment.component";
import AppointmentsList from "./components/appointments-list.component";
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      
        <Header />
          <div className="container">
          <br/>
          <br/>
          <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/photographer" exact component={photographer}/> 
          <Route path="/add" exact component={AddAppointment}/>
          <Route path="/get" exact component={AppointmentsList} />
          <Route path="/edit/:id" exact component={EditAppointment} />
          </Switch>
          <br/>
          </div>
        <Footer />
      
    </Router>

  );
}

export default App;


