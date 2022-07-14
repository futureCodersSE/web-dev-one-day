import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/home";
import Worksheet1 from "./Worksheets/1";
import Worksheet2 from "./Worksheets/2";
import Worksheet3 from "./Worksheets/3";
import Worksheet4 from './Worksheets/4';
import Worksheet5 from './Worksheets/5';
import Worksheet6 from './Worksheets/6';

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
            <Route path='/worksheets/4' element={<Worksheet4 />} />
            <Route path='/worksheets/5' element={<Worksheet5 />} />
            <Route path='/worksheets/6' element={<Worksheet6 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
