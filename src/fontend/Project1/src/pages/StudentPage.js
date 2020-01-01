import React, { Component } from "react";
import Student from "./../components/Student";
import ListStudent from "./../components/ListStudent";
import { connect } from "react-redux";
import callApi from "./../utils/apiCaller";
import axios from 'axios';
class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      keyword : ''
    };
  }
  componentDidMount() {
    
    axios({
      method: 'GET',
      url: 'http://localhost:8084/api/v1/students'
    }).then(res => {
      console.log('a');
      console.log(res)
      this.setState({
        students: res.data.data
      })
    })
    .catch(error => console.log(error));
   
  }

  onDelete = id => {
    var { students } = this.state;
    callApi(`students/${id}`, "DELETE", null).then(res => {
      if (res.status === 200) {
        //OK
        var index = this.findIndex(students, id);
        console.log("lala" + index)
        if (index !== -1) {
          students.splice(index, 1);
          this.setState({
            students: students
          });
        }
      }
    });
  };
  findIndex = (students, id) => {
    var result = -1;
    students.forEach((students, index) => {
      if (students.id === id) {
        result = index;
      }
    });
    return result;
  };

  onSearch = (keyword)=> {
    this.setState({
      keyword : keyword
    })
    
  }

  render() {
    // var {students} = this.props ;
    var { students, keyword } = this.state;
    console.log(this.state.students)

    if (keyword) {
      students = students.filter(student => {
        return keyword.toLowerCase().indexOf(keyword) != -1;
      });
    }
    return (
      <div>
        <Student onSearch={this.onSearch}>
          {this.showStudents(students)}
        </Student>
      </div>
    );
  }
  showStudents(students) {
    var result = null;
    if (students.length > 0) {
      result = students.map((student, index) => {
        return (
          <ListStudent
            key={index}
            student={student}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps, null)(StudentPage);
