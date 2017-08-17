import React from 'react';

export default class GifItem extends React.Component {

   render () {
      let GifUrl = `gifs/${this.props.data}.gif`
      return (
          <div className="gif-entry">
            <img src={ GifUrl } alt="GifUrl" />
          </div>
      )
   }
}
