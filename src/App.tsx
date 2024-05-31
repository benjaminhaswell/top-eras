
import './App.css'
import EraButton from './components/EraButton'

function App() {

  return (
    <>
      <h1>Welcome.</h1>
      <p>Please select an era.</p>

      <div className="button-container">
        <EraButton name="Self Titled" color="#8cb82b" />
        <EraButton name="Regional At Best" color="#6bc1da" />
        <EraButton name="Vessel" color="#fbf9f9" />
        <EraButton name="Blurryface" color="#e03c31" />
        <EraButton name="Trench" color="#fce300" />
        <EraButton name="Scaled and Icy" color="#f67eb4" />
        <EraButton name="Clancy" color="#d62420" />
      </div>
    </>
  )
}

export default App
