import React from 'react';
import ReactDOM from 'react-dom';
import './css/stylesheet.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Content from './pages/Content';
import Home from './pages/Home';


ReactDOM.render(
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path="/content" element={<Content />} exact />
            <Route component={Error} />
          </Routes>
        </BrowserRouter>,
  document.getElementById('root')
);
