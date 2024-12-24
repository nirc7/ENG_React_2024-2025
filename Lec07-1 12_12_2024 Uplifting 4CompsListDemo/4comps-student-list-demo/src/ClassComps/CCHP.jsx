import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import CCInputs from './CCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';
import FCInputs from '../FuncComps/FCInputs';



const StudentsInit = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }];

export default class CCHP extends Component {
  constructor() {
    super();

    this.state = {
      students: StudentsInit,
      counter: StudentsInit.length
    };
  }

  getStudentFromInputs = (id, name) => {
    console.log(id, name);
    let newCounter = this.state.counter + 1;
    let newStudents = [...this.state.students, { id: uuidv4(), name }];
    console.log('before ', this.state.students);
    
    this.setState({ students: newStudents, counter: newCounter }, () => {
      console.log('added new students',  this.state.students);
    });
    console.log('after ', this.state.students);
  }

  getStudent2Del = (id) => {
    console.log(id);
    let newCounter = this.state.counter - 1;
    let newStudnets = this.state.students.filter(stu => stu.id !== id);
    this.setState({ students: newStudnets, counter: newCounter }, ()=>{
      console.log('deeleted one students',  this.state.students);
    });
  }

  render() {

    console.log('render ', this.state.students);


    return (
      <div style={{ border: '2px dashed purple', margin: 10, padding: 10 }}>
        CCHP <br />
        <FCInputs sendStudent2HP={this.getStudentFromInputs} />
        <CCInputs sendStudent2HP={this.getStudentFromInputs} />
        counter={this.state.counter} <br />
        <FCStudentsList students={this.state.students} sendStudnet2Del={this.getStudent2Del} />
      </div>
    )
  }
}
