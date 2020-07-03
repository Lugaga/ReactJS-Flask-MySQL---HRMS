import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import '../App.css';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name : '',
		  dob: '',
	  	phone_no: '',
		  academic_background: '',
      position: '',
      roles_duties: '',
		  earnings: '',
		  deductions: '',
		  email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      dob: decoded.identity.dob,
	  	phone_no: decoded.identity.phone_no,
		  academic_background: decoded.identity.academic_background,
      position: decoded.identity.position,
      roles_duties: decoded.identity.roles_duties,
		  earnings: decoded.identity.earnings,
		  deductions: decoded.identity.deductions,
		  email: decoded.identity.email  
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center text-uppercase">Employee Personal Profile</h1>
          </div>

          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name:</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{this.state.phone_no}</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>{this.state.dob}</td>
              </tr>
              <tr>
                <td>Academic Background:</td>
                <td>{this.state.academic_background}</td>
              </tr>
              <tr>
                <td>Position:</td>
                <td>{this.state.position}</td>
              </tr>
              <tr>
                <td>Roles/Duties:</td>
                <td>{this.state.roles_duties}</td>
              </tr>
              <tr>
                <td>Earnings:</td>
                <td>KES {this.state.earnings}</td>
              </tr>
              <tr>
                <td>Deductions:</td>
                <td>KES {this.state.deductions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
