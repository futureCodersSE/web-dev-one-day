import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/home";
import Worksheet1 from "./Worksheets/1";
import Worksheet2 from "./Worksheets/2";
import Worksheet3 from "./Worksheets/3";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/worksheets/1' element={<Worksheet1 />} />
            <Route path='/worksheets/2' element={<Worksheet2 />} />
            <Route path='/worksheets/3' element={<Worksheet3 />} />

          />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
