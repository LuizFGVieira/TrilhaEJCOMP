import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginCard from './components/Card';
import { GlobalStyle } from './styles';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginCard />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
