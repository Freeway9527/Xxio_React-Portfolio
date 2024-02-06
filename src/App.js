import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      {/*anchor link */}
    <NavBar />
    <a href="#home">Home</a> 
    <Home />
    <a href="#about">About</a> 
    <About />
    <a href="#projects">Projects</a> 
    <a href="#resume">Resume</a> 
    <a href="#Contact">Contact</a> 
    </div>
  );
}

export default App;
