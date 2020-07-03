import React, { Component } from 'react'
import { register } from './UserFunctions'



class Register extends Component {
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
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      phone_no: this.state.phone_no,
      academic_background: this.state.academic_background,
      position: this.state.position,
      roles_duties: this.state.roles_duties,
      earnings: this.state.earnings,
      deductions: this.state.deductions,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register New Employee</h1>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  required
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name "
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  placeholder="Enter your date of birth"
                  value={this.state.dob}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone_no">Phone Number</label>
                <input
                  type="phone_no"
                  className="form-control"
                  name="phone_no"
                  placeholder="Enter your phone number"
                  value={this.state.phone_no}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="academic_background">Academic Background</label>
                <input
                  type="text"
                  className="form-control"
                  name="academic_background"
                  placeholder="Enter your academic background"
                  value={this.state.academic_background}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  placeholder="Enter your position"
                  value={this.state.position}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="roles_duties">Roles and Duties</label>
                <input
                  type="text"
                  className="form-control"
                  name="roles_duties"
                  placeholder="Enter your roles/duties"
                  value={this.state.roles_duties}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="earnings">Earnings</label>
                <input
                  type="text"
                  className="form-control"
                  name="earnings"
                  placeholder="Enter your Earnings"
                  value={this.state.earnings}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deductions">Deductions</label>
                <input
                  type="text"
                  className="form-control"
                  name="deductions"
                  placeholder="Enter your deductions"
                  value={this.state.deductions}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
