import React, { Component } from "react";
import callApi from "./../utils/apiCaller";
import { Link } from "react-router-dom";
import "./Components.css";
import axios from 'axios'
class ViewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtname: "",
      txtemail: '',
      txtaddress: ""
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:8084/api/v1/students/${id}`
      }).then(res => {
        if(res !== undefined){
          var data = res.data.data;
          this.setState({
            id: data.id,
            txtname: data.name,
            txtemail : data.email,
            txtaddress: data.address
          });
        }
        
      })
      .catch(error => console.log(error));
      // callApi(`students/${id}`, "GET", null).then(res => {
      //   if(res !== undefined){
      //     var data = res.data;
      //     this.setState({
      //       id: data.id,
      //       txtname: data.name,
      //       txtemail : data.email,
      //       txtaddress: data.address
      //     });
      //   }
        
      // });
    }
  }
  render() {
    var { id, txtname, txtemail, txtaddress } = this.state;
    console.log(this.state.id)
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-hover">
            <thead>
              <tr className="text-style">
                <td>ID</td>
                <td>Name</td>
               {/* <td>Email</td> */}
                <td>Addess</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="id"
                    className="form-control"
                    value={id}
                    disabled="disabled"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="txtname"
                    className="form-control"
                    value={txtname}
                    disabled="disabled"
                  />
                </td>
                {/* <td>
                  <input
                    type="text"
                    name="txtemail"
                    className="form-control"
                    value={txtemail}
                    disabled="disabled"
                  />
              </td> */}
                <td>
                  <input
                    type="text"
                    name="txtaddress"
                    className="form-control"
                    value={txtaddress}
                    disabled="disabled"
                  />
                </td>
                <td>
                  <Link
                    type="reset"
                    className="btn btn-info"
                    to={"/studentlist"}
                  >
                    Back           
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewStudent;
