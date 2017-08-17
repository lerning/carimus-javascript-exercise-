import React, { Component } from 'react';
import Header from "./components/Header"
import GifList from "./components/GifList"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

import './App.css';

class App extends Component {
   constructor(){
     super()

     this.state = {
      gifsTotal: []
     }
   }

   componentWillMount(){
      fetch(`/api`,{
         method:"GET",
         credentials: 'include',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
      })
      .then(res => res.json())
      .then(data => {
         this.setState({
            gifsTotal: data.gifs
         })
      })
   }

  render() {
     let content = this.state.gifsTotal.length >= 1? <GifList gifsTotal = { this.state.gifsTotal } /> : <Loader />

    return (
      <div className="App">
         <Header />
            { content }
         <Footer />
      </div>
    );
  }
}

export default App;
