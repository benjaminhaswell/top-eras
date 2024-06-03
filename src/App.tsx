
import './App.css'
import EraLink from './components/EraLink';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/clancy" Component={ClancyPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  return (
    <>
      <h1>Welcome.</h1>
      <p>Please select an era.</p>

      <div className="button-container">
        <EraLink name="Self Titled" color="#8cb82b"  to="/clancy" />
        <EraLink name="Regional At Best" color="#6bc1da"  to="/clancy" />
        <EraLink name="Vessel" color="#fbf9f9"  to="/clancy" />
        <EraLink name="Blurryface" color="#e03c31"  to="/clancy" />
        <EraLink name="Trench" color="#fce300"  to="/clancy" />
        <EraLink name="Scaled and Icy" color="#f67eb4"  to="/clancy" />
        <EraLink name="Clancy" color="#d62420" to="/clancy" />
      </div>
    </>
  );
}

function ClancyPage() {
  return <h1>Clancy Page</h1>;
}

export default App
