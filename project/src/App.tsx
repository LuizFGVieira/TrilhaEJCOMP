import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginCard from './components/Card';
import { GlobalStyle } from './styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginCard />} />
          {/* <Route path='signup' element={<SignupCard />} /> */}
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
