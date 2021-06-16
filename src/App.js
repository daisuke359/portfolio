import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-nav">
          <i className="fab fa-github"></i>
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Work</a></li>
            <li className="nav-item"><a href="/">About Me</a></li>
            <li className="nav-item"><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="header-main">
          <h2 className="header-title">Hi, I'm Daisuke.</h2>
          <h4 className="header-desc">I'm a front end engineer.</h4>
            <button className="header-btn">See my work</button>
            <button className="header-btn">Get in touch</button>
        </div>
      </header> 
    </div>
  );
}

export default App;
