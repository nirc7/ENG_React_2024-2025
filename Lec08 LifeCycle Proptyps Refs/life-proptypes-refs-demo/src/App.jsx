
import './App.css'
import CCLifeDemo from './CCLifeDemo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <CCLifeDemo /> //CCLifeDemo c = new CCLifeDemo() ; c.render(); */}
        <CCLifeDemo name="avi" grade={100}/>
      </div>
    </>
  )
}

export default App
