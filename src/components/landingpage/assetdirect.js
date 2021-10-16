import React, { Component } from 'react';
import './card.css'
import img from '../../photo.jpeg'


class assetDirect extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
        <div>
      <div>
          <a href='/drop'>Add Asset</a>
       </div>
       <div>   
          <a href='/table'>Asset Registry</a>
      </div>
      </div>
        );
  }
}

export default assetDirect;