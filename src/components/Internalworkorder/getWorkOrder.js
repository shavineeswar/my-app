import React, { Component } from 'react';
import axios from 'axios';
import './table.css'
import SideNav from '../navigation/sidenav'
import { useSortBy } from 'react-table'
import { Modal, Button, ButtonToolbar, Table } from 'react-bootstrap'
import Popup from './tablepopup'



class ViewSupplierItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      headers: [
        { "WorkOrder ID": 1, " Generated Date": '20-Dec-2021', 'Due Date': '20/12/2021', 'Status': "Pending" }
      ],
      search: '',
      assetId: '',
      startdate: '',
      enddate: '',

      wid: 'workorderId',
      d1: 'date',
      status: 'status',
      assignto:'person',
      date: '05/12/2021',
      person:[]

    }

    this.clear = this.clear.bind(this)

  }

  navigateSubjectPage() {

  }

  componentDidMount() {

    axios.get('http://localhost:8089/internalwork/getall').then(response => {
      this.setState({ Items: response.data.data }, () => {

        response.data.data.map((person, index) => {

          axios.get(`http://localhost:8089/internalwork/getperson/${person.assetId}`).then(response => {
            this.setState({ person: response.data.data })
            console.log(response.data.data);
          }).catch(error => {
            alert('error.message');
          })
        })
      })
      console.log(this.state.Items);
    }).catch(error => {
      alert('error.message');
    })

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(date)
    this.setState({ enddate: '01/01/5000' })
    this.setState({ startdate: '01/01/2000' })
  }



  renderTableHeader() {
    let header = Object.keys(this.state.headers[0])
    return header.map((key, index) => {
      return <th className='th theader' key={index} onClick={() => this.sortBy(this.state.wid && this.state.date)}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {

    const { search } = this.state;
    const { startdate, enddate, date } = this.state;

    const min = new Date(startdate)
    const max = new Date(enddate)


    console.log(min)
    console.log(max)

    const filteredByDate = this.state.Items.filter(function (obj) {
      const date1 = obj.date.split('/').reverse().join('-')
      const d = new Date(date1)
      console.log(d)
      return d >= min && d < max;
    });

    console.log(filteredByDate)

    const searchItems = filteredByDate.filter(item => {
      return item.workorderId.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })


    return searchItems.map((item, index) => {
      return (
        <tr clasName='tr' key={index}>
          <td className='td'>{item.workorderId}</td>
          <td className='td'>{item.date}</td>
          <td className='td'>20-Dec-2021</td>
          {this.state.person.map((item1,index1) => {
            return(
              <td className='td'>{item1.personName}</td>
            )
          })}        
          
          <td className='td'
            style={{
              fontWeight: 'bold',
              fontSize: '0.75rem',
              color: 'white',
              backgroundColor: 'grey',
              borderRadius: 8,
              margin: '15px',
              textAlign: 'center',
              padding: '3px 10px',
              display: 'inline-block',
              backgroundColor:
                ((item.status === 'Pending' && '#FFA500') ||
                  (item.status === 'Completed' && 'green'))
            }}>{item.status}</td>
        </tr>
      )

    })
  }

  compareByAsc(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  compareByDesc(key) {
    return function (a, b) {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.Items];
    const arrInStr = JSON.stringify(arrayCopy);
    arrayCopy.sort(this.compareByAsc(key));
    const arrInStr1 = JSON.stringify(arrayCopy);
    if (arrInStr === arrInStr1) {
      arrayCopy.sort(this.compareByDesc(key));
    }
    this.setState({ Items: arrayCopy });
  }

  clear() {
    window.location.reload(false);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {

    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 100,
      page: 1
    };
    return (
      <div >

        <div className="row">
          <div class="col col-md-2"> <SideNav /> </div>


          <div class="col-md-10 offset-md-2.5">
            <div class="container">

              <br />
              <div align='left'>
                <input type="search" placeholder="Search Items" name='search' className="prompt" onChange={this.onChange} />
              </div>

              <div align='right'>
                <label>From</label>&nbsp;&nbsp;
                <input type="date" placeholder="From" name='startdate' className="prompt" onChange={this.onChange} />&nbsp;&nbsp;
                <label>To</label>&nbsp;&nbsp;
                <input type="date" placeholder="To" name='enddate' className="prompt" onChange={this.onChange} />&nbsp;&nbsp;

                <button onClick={this.clear}>clear</button>
              </div>

              <br />
              <div id='tableCon'>

                <table className='table' id='students'>
                  <tbody className='tbody'>
                    <th className='theader th' onClick={() => this.sortBy(this.state.wid)}>Workorder ID</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.d1)}>Generated Date</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.wid)}>Due Date</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.assignto)}>Assign TO</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.status)}>Status</th>
                    {this.renderTableData()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewSupplierItems;