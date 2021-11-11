import React, { Component} from 'react';
import axios from 'axios';

class alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
     blog:[],
     
    }
  }

  componentDidMount(){
      axios.get(`http://localhost:8089/alert/${this.props.match.params.id}`)
      .then(response =>{
        console.log('blog',response.data.data)
        this.setState({blog : response.data.data})
      })
  }

  navigateEditAlertPage(e, assetId) {
    window.location = `/alert/edit/${assetId}`
  }
  
  render() {
      return(
          <div className="container">
           {this.state.blog.length > 0 && this.state.blog.map((item,index) =>(
               <div >
            <h1>{item.assetName}</h1>
            <h5>Date of registered:{item.date}</h5>
            <h5>Maintenance Period: {item.period} months</h5>
            <h5>First Alert: {item.alert1} months</h5>
            <h5>Second Alert: {item.alert2} months</h5>
            <h5>Third Alert: {item.alert3} </h5>
            <h5>Fourth Alert: {item.alert4} </h5>
            </div>             
           ))}

        <button onClick={e => this.navigateEditAlertPage(e, this.props.match.params.id)}>Edit alert</button>

          </div>
      );
  }
}

export default alert;