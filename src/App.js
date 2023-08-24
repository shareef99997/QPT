import React from "react";
import { Blog, Footer, Header, Possibility, WhatQPT } from "./containers";
import Features from "./containers/features/Features";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import './App.css'


//////////////////////////////////////////////////////////////////////////

const App = () => {
  return (

    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatQPT />
        <Features />
        <Possibility />
        <CTA/>
        <Blog />
        <Footer />
      </div>
    </div>

  )
}

/////////////////////////////////////////////////////////////////////////


export default App;