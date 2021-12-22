import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(){
    super();
    this.state = {
      employeeList: [],
    }
  }

  componentDidMount(){
    this.handleEmployeeData();
  }

  handleEmployeeData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      this.setState({
        employeeList: data, 
      })
    })
  }

  render(){
    let employeeElArr = this.state.employeeList.map((employee) => {
      return (
        <Employee key={employee.id} employee={employee} handleEmployeeData={this.handleEmployeeData}/>
      )
    })
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employeeElArr}
        </section>
      </main>
    );
  }
};

export default EmployeeList;