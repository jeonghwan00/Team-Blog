/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {

  let post = 'study';
  let [글제목, b] = useState(['뿅뿅', '슉슉', '쁑쁑']);
  
  return (
    <>
    <Navbar/>

    </>
  );
}

export default App;

