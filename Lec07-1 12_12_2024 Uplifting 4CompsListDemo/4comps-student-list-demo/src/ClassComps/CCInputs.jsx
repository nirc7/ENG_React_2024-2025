import { Component } from 'react';

export default class CCInputs extends Component {
  constructor(props) {
    super(props);

  }

  chgID = (e) => {
    this.setState({ id: Number(e.target.value) });
  }

  chgName = (e) => {
    this.setState({ name: e.target.value });
  }

  btnAddStudent = () => {
    this.props.sendStudent2HP(this.state.id, this.state.name);
  }

  render() {
    return (
      <div style={{ border: '2px dashed orange', margin: 10, padding: 10 }}>CCInputs <br />
        ID:<input type="text" onChange={this.chgID} /> <br />
        Name:<input type="text" onChange={this.chgName} /> <br />
        <button onClick={this.btnAddStudent}>Add Student</button>
      </div>
    )
  }
}
