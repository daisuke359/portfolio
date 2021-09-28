import './App.css';
import Header from './components/header/Header';
import Work from './components/work/Work';
import AboutMe from './components/aboutMe/AboutMe';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header/>
      {/* <AboutMe/> */}
      <Work/>
      {/* <Skill/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
