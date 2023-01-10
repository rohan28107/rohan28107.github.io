import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar id="navbar"/>
     <Home />
     <About />
    </div>
  );
}

export default App;
