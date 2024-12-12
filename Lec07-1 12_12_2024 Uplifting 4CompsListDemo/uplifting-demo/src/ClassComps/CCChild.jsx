import { Component } from 'react';

export default class CCChild extends Component {
  constructor(props) {
    super(props);

  }

  btnSend = () => {
    this.props.sendData2Parent(7);
  }

  render() {
    return (
      <div style={{ border: '2px black solid', padding: 10, margin: 10 }}>CCChild <br />
        my heritance = {this.props.ineritance} <br />
        <button onClick={this.btnSend}>send data 2 parent</button>
      </div>
    )
  }
}
