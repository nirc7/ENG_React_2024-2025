import { Component } from "react";

export default class CCStudnetsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: 'avi', grade: '100' },
        { id: 2, name: 'benny', grade: '99' }]
    };
  }

  chgId = (e) => {
    this.setState({ id: Number(e.target.value) });
  }

  chgName = (e) => {
    this.setState({ name: e.target.value });
  }

  chgGrade = (e) => {
    this.setState({ grade: Number(e.target.value) });
  }

  btnAddStudnet = () => {
    let newStudents = [...this.state.students,
    {
      id: this.state.id,
      name: this.state.name,
      grade: this.state.grade
    }];
    console.log(newStudents);
    console.log('before ', this.state.students);
    this.setState({ students: newStudents });
    console.log('after ', this.state.students);
  }

  render() {
    console.log('render ', this.state.students);
    let studnetsStr = this.state.students.map((stu) =>
      <div key={stu.id}>id={stu.id} name={stu.name} grade={stu.grade}</div>
    );

    return (
      <div>
        Id: <input type="text" onChange={this.chgId} /> <br />
        Name: <input type="text" onChange={this.chgName} /> <br />
        Grade: <input type="text" onChange={this.chgGrade} /> <br /> <br />
        <button onClick={this.btnAddStudnet}>Add Student</button> <br />
        <h3>List:</h3>
        {studnetsStr}
      </div>
    );
  }
}