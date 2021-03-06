import React, { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })

    }

    onSearch =() => {
       this.props.onSearch(this.state.keyword); 
    }
  render() {
      var {keyword} = this.state;
    return (
      <div className="input-group margin-table">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Search"
          value ={keyword}
          onChange = {this.onChange}
        />

        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick = {this.onSearch}>
            <span className="fa fa-search"></span>
            Search
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
