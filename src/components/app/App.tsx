import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import { WelcomePage, MainPage } from '../pages';

const App = () => {

  return (
      <Router>
          <Routes>
              <Route path='/' element={ <WelcomePage/> } />
              <Route path='/todolist' element={ <MainPage/> } />
          </Routes>
      </Router>
  );
}

export default App;
