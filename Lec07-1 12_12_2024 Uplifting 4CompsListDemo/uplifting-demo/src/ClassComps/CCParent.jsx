import { Component } from 'react';
import CCChild from './CCChild';

export default class CCParent extends Component {
  constructor() {
    super();

    this.myMoney = "1000000$";
  }

  getDataFromChild = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div style={{ border: '2px green solid', padding: 10, margin: 10 }}>CCParent <br />
        <CCChild ineritance={this.myMoney} sendData2Parent={this.getDataFromChild} />
      </div>
    )
  }
}
