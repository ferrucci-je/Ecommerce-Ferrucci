import logo from './logo.svg';
import './App.css';
import { NuevoModulo } from './NuevoModulo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Alumno: Jonathan Ferrucci</p>
        <p>
        Curso: Coderhouse - React2021
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo . . .
        </a>
      </header>
      <NuevoModulo/>
    </div>
  );
  
}

export default App;
