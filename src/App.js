import './App.css';
import Header from './components/header/Header';
import Work from './components/work/Work';
import AboutMe from './components/aboutMe/AboutMe';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Work/>
      <AboutMe/>
      <Skill/>
      <Contact />
    </div>
  );
}

export default App;
