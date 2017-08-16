import React, { Component } from 'react';
import Header from "./components/Header"
import GifList from "./components/GifList"
import Footer from "./components/Footer"

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
    return (
      <div className="App">
         <Header />
         <GifList gifsTotal = { this.state.gifsTotal } />
         <Footer />
      </div>
    );
  }
}
// <Loader />

export default App;
