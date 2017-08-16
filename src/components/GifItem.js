import React, { Component } from 'react';

export default class GifItem extends React.Component {
   constructor(props) {
     super(props)
   }
   render () {
      console.log('proparu', this.props)
      let GifUrl = `gifs/${this.props.data}.gif`
      return (
          <div className="gif-entry">
            <img src={ GifUrl } />
          </div>
      )
   }
}
