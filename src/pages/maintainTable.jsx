import React from 'react';
import MUIDataTable, { TableBodyCell, TableBodyRow } from 'mui-datatables';
import axios from "axios"


class AdvFilter extends React.Component {
  state = {
    columns: ['Type Category 1','Type Category 2', 'Name of Specification', 'Number of phases 1', 'Number of phases 2', 'Rated power (kVA) 1','Nominal voltage (kV) 1','Nominal voltage (kV) 2','Rated Insulation level (kV) 1','Rated current (A) 1','Rated Frequency (Hz)','SI (switching impulse withstand voltage level) kV','LI (Lightning impulse withstand voltage level) kV2','Vector Group 3','Temperature','Type of Oil','TC Type','TC Tap Number 1','Coolling Method 1,2'],
    out:[ 
      // ['Glamorous Blush','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 30, '10,000 LKR'],
      // ['50 Red Roses','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 12, '20,000 LKR'],
      // ['Eternal Rose','nifarooz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 20, '50,000 LKR'],
      // ['Falling Spring','nbazaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 10, '100,000 LKR'],
      // ['Love Blossoms','kilyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 50, '100,000 LKR'],
      // ['Eternal Sunshine', 'niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 15, '100,000 LKR'],
      // ['Beckham Homme', 'kiyaz889@kiyaz.lk', 'Perfume', 'David Beckham', 15, '100,000 LKR'],
      // ['Beckham Signature','kiyaz889@kiyaz.lk', 'Perfume', 'David Beckham', 15, '100,000 LKR'],
      // ['Klein Eternity','kiyaz889@kiyaz.lk', 'Perfume', 'Calvin Klein', 15, '100,000 LKR'],
      // ['Hugo Boss Scent','kiyaz889@kiyaz.lk', 'Perfume', 'Hugo Boss', 15, '100,000 LKR'],
      // ['RiRi Crush','kiyaz889@kiyaz.lk', 'Perfume', 'Rihanna', 15, '100,000 LKR'],
      // ['Mens Watch IQ','kiyaz889@kiyaz.lk', 'Watches', 'Danish Design', 15, '100,000 LKR'],
      // ['Women\'s Lyric','kiyaz889@kiyaz.lk', 'Watches', 'Fossil', 15, '100,000 LKR'],
      // ['Apple SE Gold ','kiyaz889@kiyaz.lk', 'Watches', 'Apple', 15, '100,000 LKR'],
      // ['Perry Pink Leather','kiyaz889@kiyaz.lk', 'Watches', 'Coach', 15, '100,000 LKR'],
      // [' Blush Blossoms','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 30, '10,000 LKR'],
      // ['Red Roses','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 12, '20,000 LKR'],
      // ['U Sky Roses','nifarooz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 20, '50,000 LKR']
    ],
    // TypeCategory1:'',
    // TypeCategory2:'',
    // NameofSpecification:'',
    // Numberofphases1:'',
    // Numberofphases2:'',
    // Ratedpower1:'',
    // Nominalvoltage1:'',
    // Nominalvoltage2:'',
    // RatedInsulationlevel1:'',
    // Ratedcurrent1:'',
    // RatedFrequency:'',
    // SI:'',
    // LI:'',
    // VectorGroup:'',
    // Temperature:'',
    // TypeofOil:'',
    // TCType:'',
    // TCTapNumber1:'',
    // Cool:'',
    assert:[],
    supi:[]
  }

  componentDidMount(){
    axios.get('http://localhost:8089/assert/getall')
    .then(response => {
      console.log(response.data.data )
      this.setState({assert :response.data.data})
        this.state.assert.map((item) => {
          this.setState({supi :[item.TypeCategory1,item.TypeCategory2,item.NameofSpecification, item.Numberofphases1,item.Numberofphases2,
                                item.Ratedpower1,item.Nominalvoltage1,item.Nominalvoltage2, item.RatedInsulationlevel1,item.Ratedcurrent1,
                                item.RatedFrequency,item.SI,item.LI, item.VectorGroup,item.Temperature,
                                item.TypeofOil,item.TCType,item.TCTapNumber1, item.Cool] })

          console.log(this.state.supi )
          
          this.state.out.push(this.state.supi);
        });
        
        console.log(this.state.out )
    })
  
  }
  render() {
    const data = this.state.out
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

      
      <div className="row bg-secondary bg-opacity-10">
            <div className="col col-lg-1"></div>
            <div className="col mb-3 ">
              <div className="m-5 ">
              <h3 align="center" ></h3>
              <MUIDataTable
                title="Assets"
                
                //no promblem in db fetch
                //no problem in state
                //no problem in render
                
                data={data}
                columns={header}
                options={options}
            />
            </div>
            </div>
          </div>

    );
  }
}

export default AdvFilter;