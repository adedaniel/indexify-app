import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'globalStyles';
import Login from 'modules/Login/Login';
import Comapnies from 'modules/Companies/Comapnies';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Comapnies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
