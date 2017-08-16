import React, { Component } from 'react';

class Toggles extends React.Component {
   render () {
      return (
         <div className="row">
           <div className="col-md-12">
             <div className="well">
               <div className="row">
                 <div className="col-sm-12">
                   <div className="btn-group btn-group-justified">
                     <a href="#" className="btn btn-default">
                       <span className="glyphicon glyphicon-list"></span>
                           See All
                     </a>
                     <a href="#" onClick={ () => this.props.toggleHandler('random') } className="btn btn-primary">
                       <span  className="glyphicon glyphicon-random"></span>
                       Random
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      )
   }


}

export default Toggles
