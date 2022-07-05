import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web development with HTML/CSS one day course
        </p>
        <a
          className="App-link"
          href="https://github.com/futureCodersSE/web-dev-one-day/blob/main/Worksheets/Introduction.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn HTML/CSS
        </a>
      </header>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
