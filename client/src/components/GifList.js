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
        gifsDisplay: this.props.gifsTotal.slice(0, 10)
     }

     this.toggleHandler = this.toggleHandler.bind(this)
   }


   toggleHandler(toggle){
      if (toggle === 'random'){
         this.setState({gifsDisplay: this.props.gifsTotal[Math.floor(Math.random() * this.props.gifsTotal.length)]})
      } else if (toggle === 'all') {
         this.setState({gifsDisplay: this.props.gifsTotal.slice(0, 10)})
      } else if (!isNaN(toggle)) {
         this.setState({ gifsDisplay: this.props.gifsTotal.slice((toggle * 10 - 10), (toggle * 10)) })
      }
   }

   render () {
      console.log('tbone', this.state.gifsTotal);
      console.log('gif list 111', this.state.gifsDisplay);
      let GifItems
      if (!this.state.gifsDisplay || this.state.gifsDisplay < 1) {
         GifItems = <Loader />
      }
      else if (this.state.gifsDisplay &&  this.state.gifsDisplay.length > 1){
         GifItems = this.state.gifsDisplay.map((gif, i) => {
            return (
               <GifItem key={gif.id} gif={gif} data={gif.id} />
            )
         })
      }
      else if (this.state.gifsDisplay.url){
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
