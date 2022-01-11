import React, { Component } from "react";
import axios from "axios"
import Select, { components } from 'react-select'
import SideNav from '../navigation/sidenav'

// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
    external: [],
    Person: [],
    Test: [],
}

class ExternalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()


    componentDidMount() {

        axios.get(`http://localhost:8089/externalwork/getbyasset/${this.props.match.params.id}`).then(response => {
            console.log(response.data.data);
            this.setState({ external: response.data.data }, () => {

                response.data.data.map((external, index) => {

                    axios.get(`http://localhost:8089/person/${external.person}`).then(response => {
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

            <div className="row">
                <div class="col col-md-2"> <SideNav /> </div>


                <div class="col-md-10 offset-md-2.5">
                    <div class="container" align='center'>
                        <h1>Details of External Work Order</h1>
                        <form align='center'>

                            {this.state.external.map((item, index) => (
                                <div>
                                    <div class="form-group row" style={{ display: "flex" }}>
                                        <label class="col-sm-2 col-form-label">Department</label>
                                        <div class="col-sm-10" >
                                            <input type="type" class="form-control" value={item.department} readOnly />
                                        </div>
                                    </div>


                                    <div class="form-group row" >
                                        <label class="col-sm-2 col-form-label">Asset ID</label>
                                        <div class="col-sm-10">
                                            <input type="type" name="assetId" class="form-control" value={this.props.match.params.id} readOnly />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Asset Owner</label>
                                        <div class="col-sm-10">
                                            <input type="type" name="assetowner" class="form-control" value={item.assetowner} readOnly />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="container" align="center">
                                        <div class="row">
                                            <div class="col">
                                                <label class="col-sm-3 col-form-label">Assign To (Internal)</label>
                                                <br />
                                                <div>


                                                    <div>
                                                        <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                            <label class="col-sm-2 col-form-label">Assign To: </label>
                                                            <div class="col-sm-10" >
                                                                <input type="type" class="form-control" value={this.state.Person.personName} readOnly />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                            <label class="col-sm-2 col-form-label">Email: </label>
                                                            <div class="col-sm-10">
                                                                <input type="email" class="form-control" value={item.email} name="email" readOnly />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                            <label class="col-sm-2 col-form-label">Phone Number: </label>
                                                            <div class="col-sm-10">
                                                                <input type="tel" class="form-control" value={item.phone} name="phone" readOnly />
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                            <div class="col">
                                                <label class="col-sm-3 col-form-label">Assign To (External)</label>
                                                <br />
                                                <div >
                                                    <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                        <label class="col-sm-2 col-form-label">Assign To</label>
                                                        <div class="col-sm-10" >
                                                            <input type="text" class="form-control" name="company" value={item.company} readOnly />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                        <label class="col-sm-2 col-form-label">Email</label>
                                                        <div class="col-sm-10">
                                                            <input type="email" class="form-control" name="c_email" value={item.c_email} readOnly />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                        <label class="col-sm-2 col-form-label">Phone Number</label>
                                                        <div class="col-sm-10">
                                                            <input type="tel" class="form-control" name="c_phone" value={item.c_phone} readOnly />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                            {this.state.Test.map((item, index) => (
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
                </div>
            </div>
        );
    }
}

export default ExternalDetails;