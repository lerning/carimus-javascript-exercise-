import React, { Component } from 'react';
import Header from "./components/Header"
import GifList from "./components/GifList"
import Footer from "./components/Footer"

import './App.css';

class App extends Component {
   constructor(){
     super()

     this.state = {
      gifsPage: {
         gifs1: [{id: 0, url: 'gifs/0.gif'}, {id: 1, url: 'gifs/1.gif'}, {id: 2, url: 'gifs/2.gif'}, {id: 3, url: 'gifs/3.gif'}, {id: 4, url: 'gifs/4.gif'}, {id: 5,    url: 'gifs/5.gif'}, {id: 6, url: 'gifs/6.gif'}, {id: 7, url: 'gifs/7.gif'}, {id: 8, url: 'gifs/8.gif'}, {id: 9, url: 'gifs/9.gif'}],

         gifs2: [{id: 10, url: 'gifs/10.gif'}, {id: 11, url: 'gifs/11.gif'}, {id: 12, url: 'gifs/12.gif'}, {id: 13, url: 'gifs/13.gif'}, {id: 14, url: 'gifs/14.gif'}, {id: 15, url: 'gifs/15.gif'}, {id: 16, url: 'gifs/16.gif'}, {id: 17, url: 'gifs/17.gif'}, {id: 18, url: 'gifs/18.gif'}, {id: 19, url: 'gifs/19.gif'}],

         gifs3: [{id: 20, url: 'gifs/20.gif'}, {id: 21, url: 'gifs/21.gif'}]
      },
      gifsTotal: [{id: 0, url: 'gifs/0.gif'}, {id: 1, url: 'gifs/1.gif'}, {id: 2, url: 'gifs/2.gif'}, {id: 3, url: 'gifs/3.gif'}, {id: 4, url: 'gifs/4.gif'}, {id: 5, url: 'gifs/5.gif'}, {id: 6, url: 'gifs/6.gif'}, {id: 7, url: 'gifs/7.gif'}, {id: 8, url: 'gifs/8.gif'}, {id: 9, url: 'gifs/9.gif'}, {id: 10, url: 'gifs/10.gif'}, {id: 11, url: 'gifs/11.gif'}, {id: 12, url: 'gifs/12.gif'}, {id: 13, url: 'gifs/13.gif'}, {id: 14, url: 'gifs/14.gif'}, {id: 15, url: 'gifs/15.gif'}, {id: 16, url: 'gifs/16.gif'}, {id: 17, url: 'gifs/17.gif'}, {id: 18, url: 'gifs/18.gif'}, {id: 19, url: 'gifs/19.gif'}, {id: 20, url: 'gifs/20.gif'}, {id: 21, url: 'gifs/21.gif'}]
     }
   }

  render() {
    return (
      <div className="App">
         <Header />
         <GifList gifsPage={ this.state.gifsPage } gifsTotal = { this.state.gifsTotal } />
         <Footer />
      </div>
    );
  }
}
// <Loader />

export default App;
