import React, { Component } from 'react';

class PageNav extends React.Component {
   render () {
      return (
         <div className="row">
           <div className="col-md-12 text-center">
             <nav aria-label="Page navigation">
               <ul className="pagination">
                 <li>
                   <a href="#" aria-label="Previous">
                     <span aria-hidden="true">&laquo;</span>
                   </a>
                 </li>
                 <li><a onClick={ () => this.props.toggleHandler('1') } href="#">1</a></li>
                 <li><a onClick={ () => this.props.toggleHandler('2') } href="#">2</a></li>
                 <li><a onClick={ () => this.props.toggleHandler('3') } href="#">3</a></li>
                 <li><a onClick={ () => this.props.toggleHandler('4') } href="#">4</a></li>
                 <li><a onClick={ () => this.props.toggleHandler('5') } href="#">5</a></li>
                 <li>
                   <a href="#" aria-label="Next">
                     <span aria-hidden="true">&raquo;</span>
                   </a>
                 </li>
               </ul>
             </nav>
           </div>
         </div>
      )
   }
}

export default PageNav
