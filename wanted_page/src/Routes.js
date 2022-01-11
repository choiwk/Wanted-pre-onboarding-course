import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from '../src/Pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
