import { Component } from 'react';

export default class CCInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: ''
    };
  }

  chgID = (e) => {
    console.log(e.target.value);

    this.setState({ id: Number(e.target.value) });
  }

  chgName = (e) => {
    this.setState({ name: e.target.value.toUpperCase().replace('A', '') });
  }

  btnAddStudent = () => {
    if (this.state.id === '' && this.state.name === '') {
      return;  
    }

    this.props.sendStudent2HP(this.state.id, this.state.name);
    this.setState({ id: '', name: '' });
  }

  render() {
    return (
      <div style={{ border: '2px dashed orange', margin: 10, padding: 10 }}>CCInputs <br />
        ID:<input type="text" onChange={this.chgID} value={this.state.id} placeholder='insert your id...' /> <br />
        Name:<input type="text" onChange={this.chgName} value={this.state.name} placeholder='insrewt your name...' /> <br />
        <button onClick={this.btnAddStudent}>Add Student</button>
      </div>
    )
  }
}
