import React, { Component } from 'react';
import Header from "./components/Header"
import Toggles from "./components/Toggles"
import Loader from "./components/Loader"
import GifRow from "./components/GifRow"
import PageNav from "./components/PageNav"
import Footer from "./components/Footer"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Toggles />
         <Loader />
         <GifRow />
         <PageNav />
         <Footer />
      </div>
    );
  }
}

export default App;
