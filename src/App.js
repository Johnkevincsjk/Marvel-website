import React, { useEffect, useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import NavBar from './Components/Nav/Nav'
import Banner from "./Components/Banner/Banner";
import Comics from "./Components/Comics/Comics";
import Videos from "./Components/Videos/Videos";
import Poster from "./Components/Poster/Poster";
import Comics_sec2 from "./Components/Comics_sec2/Comics_sec2";
import Iframe from "./Components/Iframe/Iframe";
import MainFooter from "./Components/MainFooter/MainFooter";

function App() {


  return (
    <div className="App">

      <section >
        <NavBar />
        <Banner />
      </section>
      <section>
        <Comics />
      </section>
      <section>
        <Videos />
        <Poster />
      </section>
      <section>
        <Comics_sec2 />
        <Iframe />
      </section>

      <section>
        <MainFooter/>
      </section>




    </div>
  );
}

export default App;
