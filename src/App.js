import logo from './logo.svg';
import './App.css';
import Home from './components/Homepage'
import Navbar from './components/Navbar'
import Skill from './components/skill'
import Work from './components/work'
import Contact from './components/contact'
import Startii from './components/starting'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Startii/>
      <Home/>
      <Skill/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
