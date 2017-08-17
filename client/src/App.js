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
      console.log('will mount');
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
         console.log('i did it!?', data.gifs)
         this.setState({
            gifsTotal: data.gifs
            // gifs1: data.gifs.slice(0,9)
         })
      })
   }

  render() {
     console.log('totality', this.state.gifsTotal);
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
