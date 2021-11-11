import React, { Component} from 'react';
import axios from 'axios';

class blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
     blog:[],
     person:[]
    }
  }

  componentDidMount(){
      axios.get(`http://localhost:8089/blog/${this.props.match.params.id}`)
      .then(response =>{
        console.log('blog',response.data.data)
        this.setState({blog : response.data.data})
      })
  }
  
  render() {
      return(
          <div className="container">
           
            <h1>{this.state.blog.Title}</h1>             
            <p>{this.state.blog.Content}</p>

          </div>
      );
  }
}

export default blogpost;