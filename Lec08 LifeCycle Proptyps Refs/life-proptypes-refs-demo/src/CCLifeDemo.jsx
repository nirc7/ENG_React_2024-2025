import { Component } from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import cp3 from './assets/cp2.jpg';

export default class CCLifeDemo extends Component {
  constructor(props) {
    super(props);
    //go to DB bring Students...5sec setState() ERROR!
    this.state = {
      studnets: [],
      counter: 0
    };
    console.log('ctor');
    this.txtInput1;
  }

  componentDidMount = () => {
    console.log('did mount!');
    //go to DB bring Students...5sec setState()
  }

  componentWillUnmount = () => {
    console.log('will unmount!');
  }

  render() {
    console.log('render');

    //setState() //ERROR
    return (
      <div>CCLifeDemo <br />
        <Stack direction="column" spacing={5}>
          <button onClick={() => {
            this.setState(prevS => ({ counter: prevS.counter + 1 }));
            this.txtInput1.focus();
            this.txtInput1.size = 10;
          }}>counter add</button> <br />
          counetre= {this.state.counter} <br />
          num1: <input type="text" ref={ref => this.txtInput1 = ref} />
          <h3>Students List:</h3>
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            Send
          </Button>

          <img src={cp3}/> <br />
          <img src="cp1.jpg"/><br />
          <img src="https://artist99.cdn107.com/f7d/f7df8504d3756b4052c381941d684a51_xl.jpg"/>
          
        </Stack>
      </div>
    )
  }
}

CCLifeDemo.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired
};

