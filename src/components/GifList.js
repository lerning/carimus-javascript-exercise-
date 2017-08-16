import React, { Component } from 'react';
import Toggles from "./Toggles"
import PageNav from "./PageNav"
import Loader from "./Loader"
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
      if (toggle === 'random'){
         this.setState({gifsDisplay: this.props.gifsTotal[Math.floor(Math.random() * this.state.gifsTotal.length)]})
      } else if (toggle === 'all') {
         console.log('all');
         this.setState({gifsDisplay: this.props.gifsPage.gifs1})
      } else if (!isNaN(toggle)) {
         console.log( eval(`this.props.gifsPage.gifs${toggle}`));
         this.setState({ gifsDisplay: eval(`this.props.gifsPage.gifs${toggle}`) })
      }
   }

   render () {
      console.log('disp', this.state.gifsDisplay);
      let GifItems
      if (!this.state.gifsDisplay) GifItems = <Loader />
      else if (this.state.gifsDisplay &&  this.state.gifsDisplay.length > 1){
         GifItems = this.state.gifsDisplay.map((gif, i) => {
            return (
               <GifItem key={gif.id} gif={gif} data={gif.id} />
            )
         })
      }
      else if (this.state.gifsDisplay.url){
         console.log('working');
         GifItems = <GifItem gif={this.state.gifsDisplay} data={this.state.gifsDisplay.id} />
      }

      return (
         <div>
            <Toggles toggleHandler={ this.toggleHandler } />
            <div className="row">
              <div className="col-md-12">
               { GifItems}
              </div>
            </div>
            <PageNav toggleHandler={ this.toggleHandler } />
         </div>
      )
   }
}

export default GifList
