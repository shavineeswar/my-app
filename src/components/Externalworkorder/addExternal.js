import React, { Component } from "react";
import axios from "axios"
import Select, { components } from 'react-select'
import SideNav from '../navigation/sidenav'

// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
    asset: [],
    assetId: '',
    department: '',
    person: [],
    date: '',
    assetowner: [],
    email: '',
    phone: '',
    company: '',
    C_email: '',
    c_phone: '',
    option: [],
    selectPerson: [],
    Test: [],
    persondetail: [],
    Test1: '',
    Test2: '',
    Test3: '',
    Test4: '',
    Test5: '',
    Test6: '',
    Test7: '',
    Test8: '',
    Test9: '',
    Test10: '',

}

class AddWorkOrder extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPersonSelect = this.onPersonSelect.bind(this);
        this.selectShortlistedApplicant = this.selectShortlistedApplicant.bind(this);
        this.gotoAsset = this.gotoAsset.bind(this);
        this.state = initialState;
    }

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()


    componentDidMount() {
        axios.get('http://localhost:8089/person/getall')
            .then(response => {
                this.setState({ person: response.data.data }, () => {
                    let data = [];
                    this.state.person.map((item, index) => {
                        let person = {
                            value: item._id,
                            label: item.personName
                        }
                        console.log(person)
                        data.push(person)
                    });
                    console.log(data)
                    this.setState({ option: data })
                })
            })

        axios.get(`http://localhost:8089/asset/${this.props.match.params.id}`)
            .then(response => {
                console.log('asset', response.data.data)
                this.setState({ asset: response.data.data})

                    axios.get(`http://localhost:8089/internalwork/getperson/${response.data.data._id}`).then(response => {
                      this.setState({ assetowner: response.data.data })
                      console.log(this.state.assetowner);
                    }).catch(error => {
                      alert('error.message');
                    })                
            })

        axios.get(`http://localhost:8089/test/asset/${this.props.match.params.id}`)
            .then(response => {
                console.log('Test', response.data)
                this.setState({ Test: response.data.data })
            })

    }

    gotoAsset(e){
        e.preventDefault();
        window.location = `/asset/${this.props.match.params.id}`
    }

    onPersonSelect(e) {
        this.setState({ selectPerson: e ? e.map(item => item.value) : [] });

        axios.get(`http://localhost:8089/person/${e.map(item => item.value)}`)
            .then(response => {
                console.log(response.data.data)
                this.setState({ persondetail: response.data.data }, () => {
                })
            })
    }

    onChange(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    selectShortlistedApplicant = (e) => {
        const checked = e.target.checked;
        if (checked) {
            this.setState({ [e.target.name]: true })
        } else {
            // this.setState({ [e.target.name]: false })
        }
    }
    onSubmit(e) {
        e.preventDefault();

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const newWorkorder = {
            assetId: this.props.match.params.id,
            department: this.state.department,
            assetowner: this.state.assetowner,
            person: this.state.selectPerson,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.company,
            c_email: this.state.c_email,
            c_phone: this.state.c_phone,

            date: date,
        }

        const mailToCompany = {
            email: this.state.c_email,
            template: "externalworkorder"
        }

        const mailToEmployee = {
            email: this.state.email,
            template: "externalworkorder"
        }

        console.log(newWorkorder);


        axios.post("http://localhost:8089/externalwork/create", newWorkorder)
            .then(response => {
                console.log("Work Order added successfully")
                alert("Work Added")
            }).catch((err) => {
                alert(err)
            })

        axios.post(`http://localhost:8089/api/sendMail`, mailToEmployee)
            .then(response => {
                console.log('mail successfully sent');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })

        axios.post(`http://localhost:8089/api/sendMail`, mailToCompany)
            .then(response => {
                console.log('mail successfully sent');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })

    }


    render() {
        return (
            <div className="row">
                <div class="col col-md-2"> <SideNav /> </div>

                <div class="col-md-10 offset-md-2.5">
                    <div class="container" align='center'>
                        <h1>Add External Work Order</h1>
                        <form align='center'>
                            <div class="form-group row" style={{ display: "flex" }}>
                                <label class="col-sm-2 col-form-label">Department</label>
                                <div class="col-sm-10" style={{ paddingLeft: '22px' }}>
                                    <select id="department" class="form-select" name="department" onChange={this.onChange} >
                                        <option selected>Choose...</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Production">Production</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Chemical">Chemical</option>
                                        <option value="Mechanical">Mechanical</option>
                                    </select>
                                </div>
                            </div>


                            <div class="form-group row" >
                                <label class="col-sm-2 col-form-label">Asset ID</label>
                                <div class="col-sm-10">
                                    <input type="type" name="assetId" class="form-control" value={this.state.asset.Name} readOnly />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Asset Owner</label>
                                <div class="col-sm-10">
                                {this.state.assetowner.map((item1, index1) => {
                                    return(
                                    <input type="type" name="assetowner" class="form-control" value={item1.personName} readOnly />
                                    )
                                })}
                                </div>
                            </div>
                            <br />
                            <div class="container" align="center">
                                <div class="row">
                                    <div class="col">
                                        <label class="col-sm-3 col-form-label">Assign To (Internal)</label>
                                        <br />
                                        <div>
                                            <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                <label class="col-sm-2 col-form-label">Assign To</label>
                                                <div class="col-sm-10" style={{ paddingLeft: '12px' }}>
                                                    <Select options={this.state.option} onChange={this.onPersonSelect} isMulti />
                                                </div>
                                            </div>
                                            <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                <label class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" name="email" value={this.state.persondetail.email} readOnly/>
                                                </div>
                                            </div>
                                            <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                <label class="col-sm-2 col-form-label">Phone Number</label>
                                                <div class="col-sm-10">
                                                    <input type="tel" class="form-control" name="phone" value={this.state.persondetail.phone} readOnly/>
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
                                                    <input type="text" class="form-control" name="company" onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                <label class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" name="c_email" onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div class="col-md-9 mb-3" style={{ display: "flex" }}>
                                                <label class="col-sm-2 col-form-label">Phone Number</label>
                                                <div class="col-sm-10">
                                                    <input type="tel" class="form-control" name="c_phone" onChange={this.onChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />
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
                                            <td><center>{item.name} &nbsp; &nbsp;<input type="checkbox" defaultChecked={item.assign} disabled="disabled" /></center></td>
                                            <td><center>{item.eventfrequency}</center></td>
                                            <td><center>{item.duedate}</center></td>
                                            <td><center>{item.requiredEquipment}</center></td>
                                            <td><center>{item.requiredMatirial}</center></td>
                                        </tr>


                                    </tbody>
                                ))}
                            </table>

                                    <br/>
                            <div class="form-group row">
                                <div className ='col'>
                                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                                </div>
                                <div className='col'>
                                <button class="btn btn-primary" onClick={this.gotoAsset}>Cancel</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddWorkOrder;