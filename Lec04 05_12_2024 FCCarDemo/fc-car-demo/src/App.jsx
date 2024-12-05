import './App.css';
import CCStudent from './ClassComps/CCStudent';
import EFooter from './Elements/EFooter';
import FCCar from './FuncComps/FCCar';

function App() {

  return (
    <>
      <h1>React Proj</h1>
      <div className="card">
        <CCStudent id={1} name="avi" grade={100} />
        <CCStudent id={2} name="benny" grade={99} />
        <CCStudent id={3} name="charlie" grade={98} />

        <FCCar lp="11-222-33" model="BMW" speed={200} />
        <FCCar lp="22-222-22" model="Porche" speed={200} />
        <FCCar lp="77-777-33" model="Gclass" speed={300} />
      </div>
      {EFooter}
    </>
  )
}

export default App
