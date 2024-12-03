import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCPerson from './FuncComps/FCPerson';


function App() {

  let id=7;

  return (
    <div className="App">
      {EHeader}
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
          Ruppin23 <br />
          <FCPerson id={1} name="avi" />
          <FCPerson id={id} name="benny" />
          <FCPerson id={3} name="chalrie" />
          {EHeader}
      </header>
    </div>
  );
}

export default App;
