import './App.css'; 
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';

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
