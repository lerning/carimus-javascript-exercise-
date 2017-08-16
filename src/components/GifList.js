import React, { Component } from 'react';
import GifItem from "./GifItem"

class GifList extends React.Component {
   constructor(props){
     super(props)
   }

   render () {

      let GifItems = this.props.gifs.map((gif, i) => {
         return (
            <GifItem key={i} gif={gif} data={i} />
         )
      })
      console.log('giffy', GifItems)

      return (
         <div className="row">
           <div className="col-md-12">
             { GifItems }
           </div>
         </div>
      )
   }
}

export default GifList
