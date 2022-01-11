import React, { Component } from "react";
import axios from "axios"
import Select, { components } from 'react-select'
// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
   internal: [],
    Person: [],
    Test: [],


}

class InternalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()


    componentDidMount() {
        
        axios.get(`http://localhost:8089/internalwork/getbyasset/${this.props.match.params.id}`).then(response => {
            console.log(response.data.data);
            this.setState({ external: response.data.data }, () => {

                response.data.data.map((internal, index) => {

                    axios.get(`http://localhost:8089/person/${internal.person}`).then(response => {
                        this.setState({ Person: response.data.data })
                        console.log(response.data.data);
                    }).catch(error => {
                        alert('error.message');
                    })
                })
            })

        }).catch(error => {
            alert('error.message');
        })

        axios.get(`http://localhost:8089/test/asset/${this.props.match.params.id}`)
      .then(response => {
        console.log('Test', response.data)
        this.setState({ Test: response.data.data })
      })

           
    }

    render() {
        return (
            <div class="container">
                <h1>Add Work Order</h1>
                <form  >
                {this.state.internal.map((item, index) => (
                    <div>
                    <div class="form-group row" style={{ display: "flex", border: '15px' }}>

                        <label class="col-sm-2 col-form-label" >Department</label>
                        <div class="col-sm-10" style={{paddingLeft:'22px'}} >
                        <input type="type"  class="form-control" value={item.department} readOnly />
                        </div>
                    </div>


                    <div class="form-group row" >
                        <label class="col-sm-2 col-form-label" >Asset ID</label>
                        <div class="col-sm-10">
                            <input type="type"  class="form-control" value={this.props.match.params.id} readOnly />
                        </div>
                    </div>

                    <div class="form-group row" >
                        <label class="col-sm-2 col-form-label" >Asset Owner</label>
                        <div class="col-sm-10">
                            <input type="type" name="assetowner" class="form-control" value={item.assetowner} />
                        </div>
                    </div>


                    <div class="form-group row" >
                        <label class="col-sm-2 col-form-label" >Assign To</label>
                        <div class="col-sm-10" style={{paddingLeft:'22px'}}>
                        <input type="type"  class="form-control" value={item.person} readOnly />
                        </div>
                    </div>



                    <div class="form-group row" >
                        <label class="col-sm-2 col-form-label" >Email</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" name="email" value={item.email} readOnly />
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label class="col-sm-2 col-form-label" >Phone Number</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" name="phone" value={item.phone} readOnly />
                        </div>
                    </div>
                    </div>
                ))}
                </form>
                    <br />
                    <table striped bordered responsive hover size="md" >
                    <thead>
                        <tr className='tr'>
                            <th className='theader th'><center>Manitenance Event Name</center></th>
                            <th className='theader th'><center>Next Due Date</center></th>
                            <th className='theader th'><center>Equipment Required</center></th>
                            <th className='theader th'><center>Metirial Required</center></th>
                            <th className='theader th'><center>Remark</center></th>
                        </tr>
                    </thead>
                    { this.state.Test.map((item, index) => (
                        <tbody>

                            <tr className='tr'>
                                <td><center>{item.name}<input type="checkbox" defaultChecked={item.assign} disabled="disabled" /></center></td>
                                <td><center>{item.eventfrequency}</center></td>
                                <td><center>{item.duedate}</center></td>
                                <td><center>{item.requiredEquipment}</center></td>
                                <td><center>{item.requiredMatirial}</center></td>
                            </tr>


                        </tbody>
                    ))}
                </table>

                    

                

            </div>
        );
    }
}

export default InternalDetail;