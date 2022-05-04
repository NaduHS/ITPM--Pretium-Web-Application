import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Header from './components/Header';
//import Header from './components/Header.component';
import AddAppointment from './components/AddAppointment';
//import ExercisesList from "./components/exercises-list.component";
import EditAppointment from "./components/edit-appointment.component";
import AppointmentsList from "./components/appointments-list.component";

function App() {
  return (

    <Router>
      <div className="container">
        <Header />
        <br/>
        <br/>
        <Route path="/add" exact component={AddAppointment}/>
        <Route path="/get" exact component={AppointmentsList} />
        <Route path="/edit/:id" exact component={EditAppointment} />
      </div>
    </Router>

  );
}

export default App;


