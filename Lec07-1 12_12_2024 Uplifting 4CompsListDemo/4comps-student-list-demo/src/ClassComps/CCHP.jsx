import { Component } from 'react';
import CCInputs from './CCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

export default class CCHP extends Component {
  constructor() {
    super();

    this.state = {
      students: [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }]
    };
  }

  getStudentFromInputs = (id, name) => {
    console.log(id, name);
    let newStudents = [...this.state.students, { id, name }];
    console.log('before ', this.state.students);
    this.setState({ students: newStudents });
    console.log('after ', this.state.students);
  }

  render() {

    console.log('render ', this.state.students);
    

    return (
      <div style={{ border: '2px dashed purple', margin: 10, padding: 10 }}>
        CCHP <br />
        <CCInputs sendStudent2HP={this.getStudentFromInputs} />
        <FCStudentsList students={this.state.students} />
      </div>
    )
  }
}
