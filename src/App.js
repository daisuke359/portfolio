import './App.css';
import Header from './components/header/Header';
import Work from './components/work/Work';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Work/>
      <AboutMe/>
    </div>
  );
}

export default App;
