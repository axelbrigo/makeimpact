import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from '../pages/Companies/Companies';
import HomePage from '../pages/HomePage/HomePage';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies/:name" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  )
}


export default AppRouter