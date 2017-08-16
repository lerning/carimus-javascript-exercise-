import React, { Component } from 'react';
import Toggles from "./Toggles"
import GifItem from "./GifItem"

class GifList extends React.Component {
   constructor(props){
     super(props)

     this.state = {
        gifsTotal: this.props.gifsTotal,
        gifsDisplay: this.props.gifsPage.gifs1
     }

     this.toggleHandler = this.toggleHandler.bind(this)
   }

   toggleHandler(toggle){
      console.log('togglin');
      if (toggle === 'random'){
         console.log(Math.floor(Math.random() * this.state.gifsTotal.length));
         console.log(Math.floor(Math.random() * this.state.gifsTotal.length));

         console.log(Math.floor(Math.random() * this.state.gifsTotal.length));
         console.log(Math.floor(Math.random() * this.state.gifsTotal.length));
         console.log(Math.floor(Math.random() * this.state.gifsTotal.length));

         this.setState({gifsDisplay: this.props.gifsTotal[Math.floor(Math.random() * this.state.gifsTotal.length)]})
      }
   }

   render () {
      console.log('whats in displau', this.state.gifsDisplay);
      let GifItems = <GifItem gif={this.state.gifsDisplay} data={this.state.gifsDisplay.id} />
      if (this.state.gifsDisplay.length > 1){
         GifItems = this.state.gifsDisplay.map((gif, i) => {
            return (
               <GifItem key={i} gif={gif} data={i} />
            )
         })
      }
      // else {
      //    let GifItems = this.state.gifsDisplay
      // }
      //
      // console.log('poooo', GifItems);

      return (
         <div>
            <Toggles toggleHandler={ this.toggleHandler } />
            <div className="row">
              <div className="col-md-12">
               { GifItems}
              </div>
            </div>
         </div>
      )
   }
}

export default GifList
