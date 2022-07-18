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
import Worksheet7 from './Worksheets/7';
import ReplitSetup from './Worksheets/ReplitSetup';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/worksheets/introduction/html' element={<Worksheet1 />} />
            <Route path='/worksheets/introduction/css' element={<Worksheet2 />} />
            <Route path='/worksheets/box-model' element={<Worksheet3 />} />
            <Route path='/worksheets/positioning' element={<Worksheet4 />} />
            <Route path='/worksheets/flexbox-grid' element={<Worksheet5 />} />
            <Route path='/worksheets/semantic-html' element={<Worksheet6 />} />
            <Route path='/worksheets/final-task' element={<Worksheet7 />} />
            <Route path='/replit-setup' element={<ReplitSetup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
