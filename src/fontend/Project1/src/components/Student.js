import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Search from './Search';
import "./Components.css";

class Student extends Component {
  render() {
    return (
      <Route>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 margin-search">
            {/* student */}
            {/* Search */}
                 {/*<Search onSearch = {this.props.onSearch}/> */}
          </div>
          <br />
          <br />

          {/* New Student Button*/}

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to="/student/new" type="button" className="btn btn-success">
                New Student
              </Link>
            </div>
          </div>
          <br/>
          <br/>

          <table className="table table-hover">
            <thead>
              <tr className="text-style">
                <td>#</td>
                <td>ID</td>
                <td>Name</td>
                <td>Addess</td>
                <td>View</td>
                <td>Action</td>
                <td>Action2</td>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </Route>
    );
  }
}

export default Student;
