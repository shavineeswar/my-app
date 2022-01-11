import React, { Component } from 'react';
import axios from 'axios';
import '../Internalworkorder/table.css'
import SideNav from '../navigation/sidenav'
import TopNav from '../navigation/topNav'



class ViewSupplierItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      search: '',
      assetId: '',
      startdate: '',
      enddate: '',

      wid: 'workorderId',
      d1: 'date',
      status: 'status',
      assignto: 'person',
      date: '05/12/2021',
      company:'company',
      person: [],
      external:[]
    }

    this.clear = this.clear.bind(this)

  }

  navigateSubjectPage() {

  }

  componentDidMount() {

    axios.get('http://localhost:8089/externalwork/getall').then(response => {
        console.log(response.data.data)
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

    // axios.get('http://localhost:8089/externalwork/getall').then(response => {
    //       // this.state.Items.push(response.data.data)
    //       this.setState({ external: response.data.data })
    //         console.log(response.data.data);
    //       }).catch(error => {
    //         alert('error.message');
    //       })
        
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
      return item.assetId.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })


    return searchItems.map((item, index) => {
      return (
        <tr clasName='tr' key={index}>
          <td className='td'>{item.company}</td>
          <td className='td'>{item.date}</td>
          {this.state.person.map((item1, index1) => {
            return (
              <td className='td'>{item1.personName}</td>
            )
          })}
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
       
          <div class="col-md-12 offset-md-2.5">
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

                <button onClick={this.clear}>Clear</button>
              </div>

              <br />
              <div id='tableCon'>

                <table className='table' id='students'>
                  <tbody className='tbody'>
                    <th className='theader th' onClick={() => this.sortBy(this.state.company)}>Company</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.d1)}>Generated Date</th>
                    <th className='theader th' onClick={() => this.sortBy(this.state.assignto)}>Assign TO</th>
                    {this.renderTableData()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
     
    )
  }
}

export default ViewSupplierItems;