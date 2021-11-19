import React from 'react';
import MUIDataTable, { TableBodyCell, TableBodyRow } from 'mui-datatables';
import axios from "axios"
import SideNav from '../components/report/tile'

class AdvFilter extends React.Component {
  state = {
    columns: ['Name','TypeCategory1','TypeCategory2', 'NameofSpecification', 'Numberofphases1', 'Numberofphases2', 'Ratedpower1','Nominalvoltage1','Nominalvoltage2','RatedInsulationlevel1','Ratedcurrent1','RatedFrequency','SI','LI','VectorGroup','Temperature','TypeofOil','TCType','TCTapNumber1','Cool'],
    asset:[],
    supi:[]
  }

  componentDidMount(){
    axios.get('http://localhost:8089/asset/getall')
    .then(response => {
      console.log(response.data.data )
      this.setState({asset :response.data.data})
        this.state.asset.map((item) => {
          this.setState({supi :[item.TypeCategory1,item.TypeCategory2,item.NameofSpecification, item.Numberofphases1,item.Numberofphases2,
                                item.Ratedpower1,item.Nominalvoltage1,item.Nominalvoltage2, item.RatedInsulationlevel1,item.Ratedcurrent1,
                                item.RatedFrequency,item.SI,item.LI, item.VectorGroup,item.Temperature,
                                item.TypeofOil,item.TCType,item.TCTapNumber1, item.Cool] })

          console.log(this.state.supi )
          
          this.state.asset.push(this.state.supi);
        });
        
        console.log(this.state.out )
    })
  
  }
  render() {
    const data = this.state.asset 
    console.log("data",data)
    const header = this.state.columns
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 100,
      page:1
    };
    return (
      <div>
          <SideNav/>
      <div className="row bg-secondary bg-opacity-10">
            <div className="col col-sm-1"></div>
            <div className="col mb-2 ">
              <div className="m-3 ">
              <h3 align="center" ></h3>
              <MUIDataTable
                title="Tranfromers"
                data={data}
                columns={header}
                options={options}
            />
            </div>
            </div>
          </div>
          </div>

    );
  }
}

export default AdvFilter;