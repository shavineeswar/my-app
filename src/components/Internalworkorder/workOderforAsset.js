import React, { Component} from 'react';
import axios from 'axios';

class workOrderforasset extends Component {
  constructor(props) {
    super(props);
    this.state = {
     workorder:[],
     person:[]
    }
  }

  componentDidMount(){
      axios.get(`http://localhost:8089/internalwork/getbyasset/${this.props.match.params.id}`)
      .then(response =>{
        console.log('ALL ASSET',response.data.data)
        this.setState({workorder : response.data.data})
      })

      axios.get(`http://localhost:8089/internalwork/getperson/${this.props.match.params.id}`)
      .then(response =>{
        console.log('ALL ASSET',response.data.data)
        this.setState({perosn : response.data.data})
      })
  }

  navigateAddWorkorderpagee(e, assetId) {
    window.location = `/addworkorder/${assetId}`
  }
  
  
  render() {
      return(
          <div className="container">
            <button onClick={e => this.navigateAddWorkorderpagee(e, this.props.match.params.id)}>Add Work Order</button>

            <h1>Asset</h1>
            {this.state.workorder.length > 0 && this.state.workorder.map((item,index) =>(
              <div key={index} className ="card mb-3" >
                
                <h4>{item.department}</h4>             
                <h5>{item.date}</h5>
                <h5>{item.priority}</h5>
                <h5>{item.dueDate}</h5>
                <h5>{item.status}</h5>

               
                <h5>{item.personName}</h5>
             

              </div>
            ))}


          </div>
      );
  }
}

export default workOrderforasset;