import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangePhotographer = this.onChangePhotographer.bind(this);
    this.onChangeEventType = this.onChangeEventType.bind(this);
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerContactNo = this.onChangeCustomerContactNo.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      photographer: '',
      eventType: '',
      customerName: '',
      customerContactNo: '',
      customerEmail: '',
      date: new Date()
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/appointment/get/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          photographer: response.data.photographer,
          eventType: response.data.eventType,
          customerName: response.data.customerName,
          customerContactNo: response.data.customerContactNo,
          customerEmail: response.data.customerEmail,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangePhotographer(e) {
    this.setState({
      photographer: e.target.value
    })
  }

  onChangeEventType(e) {
    this.setState({
      eventType: e.target.value
    })
  }

  onChangeCustomerName(e) {
    this.setState({
      customerName: e.target.value
    })
  }

  onChangeCustomerContactNo(e) {
    this.setState({
      customerContactNo: e.target.value
    })
  }

  onChangeCustomerEmail(e) {
    this.setState({
      customerEmail: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const appointment = {
      photographer: this.state.photographer,
      eventType: this.state.eventType,
      customerName: this.state.customerName,
      customerContactNo: this.state.customerContactNo,
      customerEmail: this.state.customerEmail,
      date: this.state.date
    }

    console.log(appointment);

    axios.post('http://localhost:5000/appointment/update/' + this.props.match.params.id, appointment)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Appointment</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Photographer: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.photographer}
              onChange={this.onChangePhotographer}
              />
        </div>
        <div className="form-group"> 
          <label>Event Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.eventType}
              onChange={this.onChangeEventType}
              />
        </div>
        <div className="form-group">
          <label>Customer Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customerName}
              onChange={this.onChangeCustomerName}
              />
        </div>
        <div className="form-group">
          <label>Customer Contact No: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customerContactNo}
              onChange={this.onChangeCustomerContactNo}
              />
        </div>
        <div className="form-group">
          <label>Customer E-mail: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customerEmail}
              onChange={this.onChangeCustomerEmail}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <input type="submit" value="Edit Appointment" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}