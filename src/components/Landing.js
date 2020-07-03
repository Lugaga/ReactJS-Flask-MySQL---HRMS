import React, { Component } from 'react'
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">EMPLOYEES HRMS</h1>
          </div>
          <div className="center">
          <img src={require('./images/hrms.jpg')} />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
