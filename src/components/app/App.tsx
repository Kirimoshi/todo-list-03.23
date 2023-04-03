import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import { WelcomePage, MainPage } from '../pages';

const App = () => {

  return (
      <HashRouter>
          <Routes>
              <Route path='/' element={ <WelcomePage/> } />
              <Route path='/todolist' element={ <MainPage/> } />
          </Routes>
      </HashRouter>
  );
}

export default App;
