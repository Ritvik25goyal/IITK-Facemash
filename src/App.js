import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import {Boys} from './components/Boys/Boys';
import {Girls} from './components/Girls/Girls';
import BoyzCelebrity from './components/BoyzCelebrity/BoyzCelebrity';
import GirlsCelebrity from './components/GirlsCelebrity/GirlsCelebrity';

function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/boyz" Component={Boys} />
        <Route exact path="/girls" Component={Girls} />
        <Route exact path="/boyzcelebrities" Component={BoyzCelebrity} />
        <Route exact path="/girlscelebrities" Component={GirlsCelebrity} />
    </Routes>
    </>
  );
}

export default App;
