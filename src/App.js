import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Boys from './components/Boys/Boys';
import Girls from './components/Girls/Girls';
import BoyzCelebrity from './components/BoyzCelebrity/BoyzCelebrity';
import GirlsCelebrity from './components/GirlsCelebrity/GirlsCelebrity';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/boyz" Component={Boys} />
        <Route path="/girls" Component={Girls} />
        <Route path="/boyzcelebrities" Component={BoyzCelebrity} />
        <Route path="/girlscelebrities" Component={GirlsCelebrity} />
    </Routes>
    </>
  );
}

export default App;
