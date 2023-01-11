import './App.css'; 
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Navbar id="navbar"/>
     <Home />
     <About />
     <Skills />
     <Project />
    </div>
  );
}

export default App;
