import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom"
import Airlines from './Components/Airlines'
import Airline from './Components/Airline'


// where you put all your paths and links
function App({services}) {
  return (
    <Routes>
      <Route path="/" element={<Airlines />} />
      <Route path="/airlines/:id" element={<Airline />} />
    </Routes>
  );
}

export default App;
