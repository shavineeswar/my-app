import React from "react";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';

class Usercharts extends React.Component {
  constructor(props){
    super(props);
    this.state = {

        totalUser: 35,
        totalBuyer: 60,
        totalSupplier:40,
        

      
      dataDoughnut: {
        labels: ["User", "Buyer","Supplier"],
        datasets: [
          {
            data: [0, 0,0],
            backgroundColor: ["#F7464A", "#FF851B","#2ECC40"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#FF851B",
              "#2ECC40"      
            ]
          }
        ]
      }
    }
}


componentDidMount(){
  // axios.get('http://localhost:9999/admin/totaluser')
  // .then(response => {
  //     this.setState({totalUser : response.data.data })
        
  //     axios.get('http://localhost:9999/admin/totalbuyer')
  //     .then(response => {
  //       this.setState({totalBuyer : response.data.data })
        
  //       axios.get('http://localhost:9999/admin/totalsupplier')
  //       .then(response => {
  //         this.setState({totalSupplier : response.data.data })
  

      this.setState({dataDoughnut : {
        labels: ["User", "Buyer","Supplier"],
        datasets: [
          {
            data: [this.state.totalUser,this.state.totalBuyer,this.state.totalSupplier ],
            backgroundColor: ["#F7464A", "#FF851B","#2ECC40"],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#FF851B",
                "#2ECC40"
            ]
          }
        ]
      }})
  
      
    }

render() {
    return (
        <div>
           
      <div className="row">
      <div className="col col-lg-2"></div>
      <div className="col">
            <br/><br/>
        <div align="centrer" class="container-sm w-50">
        <div class="col">        
            <div className="card mb-3">
            <h5 class="card-title" align="center">Response</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Usercharts;