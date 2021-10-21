import React, { Component } from 'react';
import './card.css'
import img from '../../photo.jpeg'


class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading:this.props.heading,
      icon:this.props.url,
      direct:this.props.direct
    }
  }

  

  render() {
    return (
        
      <div class="cards-list" >
        <a href={this.state.direct} style={{textDecoration:'none'}}>
      <div class="cardl 1" >
        <div class="card_image" align="center"> <img src={this.state.icon} /> </div>
        <div class="card_title title-white">
          <p>{this.state.heading}</p>
        </div>
      </div>
         </a>
      </div>

        );
  }
}

export default card;