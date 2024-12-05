import { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grade: this.props.grade,
      bonus: 5
    };
  }

  btnAddGrade = () => {
    //this.state.grade = 300; //ERROR!
    //this.setState({ grade: 400 , bonus:10});
    
    console.log('bofore grade=',  this.state.grade);
    this.setState(prevS => ({ grade: prevS.grade + 5, bonus: 10 }));
    console.log('after grade=',  this.state.grade);
    
    //this.render() //ERROR!
  }

  render() {
    console.log('render grade=',  this.state.grade);
    
    return (
      <div style={{
        color: 'grey', margin: 10, padding: 10,
        border: '5px solid yellow'
      }}>
        Student <br />
        id={this.props.id} <br />
        name={this.props.name} <br />
        grade={this.props.grade} <br />
        state grade = {this.state.grade} <br />
        bonus = {this.state.bonus} <br />
        <button onClick={this.btnAddGrade}>Add Grade</button>
      </div>
    );
  }
}