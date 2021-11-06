import React, { Component} from 'react';
import axios from 'axios';

class getallasset extends Component {
  constructor(props) {
    super(props);
    this.state = {
     asset:[]
    }
  }

  componentDidMount(){
      axios.get('http://localhost:8089/asset/getall')
      .then(response =>{
        console.log('ALL ASSET',response.data)
        this.setState({asset : response.data.data})
      })
  }
  
  navigateSubjectPage(e, assetId) {
    window.location = `/workorder/${assetId}`
  }

  render() {
      return(
          <div className="container">
            <h1>Asset</h1>
            {this.state.asset.length > 0 && this.state.asset.map((item,index) =>(
              <div key={index} className ="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4>{item.TypeCategory1}</h4>
                <h5>{item.TypeCategory2}</h5>
              </div>
            ))}

          </div>
      );
  }
}

export default getallasset;