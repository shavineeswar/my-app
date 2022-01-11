import React, { Component } from "react";
import axios from "axios"
import Select, { components } from 'react-select'
import SideNav from '../navigation/sidenav'
// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
    asset: '',
    assetId: '',
    department: '',
    person: [],
    date: '',
    assetowner: '',
    email: '',
    count: '',
    status: 'Pending',
    workorderId: '',
    phone: '',
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
                this.setState({ asset: response.data.data })
            })


        axios.get(`http://localhost:8089/internalwork/count/${this.props.match.params.id}`)
            .then(response => {
                console.log('count', response.data.data)
                this.setState({ count: response.data.data })
            })

        // axios.get(`http://localhost:8089/test/asset/${this.props.match.params.id}`)
        //     .then(response => {
        //         console.log('Test', response.data)
        //         this.setState({ Test: response.data.data })
        //     })

        axios.get(`http://localhost:8089/test/asset/${this.props.match.params.id}`)
            .then(response => {
                console.log('Test', response.data.data)
                this.setState({ Test: response.data.data }, () => {
                    
                        let test1 = response.data.data[0].assign
                        let test2 = response.data.data[1].assign
                        let test3 = response.data.data[2].assign
                        let test4 = response.data.data[3].assign
                        let test5 = response.data.data[4].assign
                        let test6 = response.data.data[5].assign
                        let test7 = response.data.data[6].assign
                        let test8 = response.data.data[7].assign
                        let test9 = response.data.data[8].assign
                        let test10 = response.data.data[9].assign

                        console.log(test1)
                        console.log(test2)
                        console.log(test3)
                        console.log(test4)
                        console.log(test5)
                        console.log(test6)
                        console.log(test7)
                        console.log(test8)
                        console.log(test9)
                        console.log(test10)

                        this.setState({ Test1: test1 })
                        this.setState({ Test2: test2 })
                        this.setState({ Test3: test3 })
                        this.setState({ Test4: test4 })
                        this.setState({ Test5: test5 })
                        this.setState({ Test6: test6 })
                        this.setState({ Test7: test7 })
                        this.setState({ Test8: test8 })
                        this.setState({ Test9: test9 })
                        this.setState({ Test10: test10 })                   
                })

                console.log(this.state.Test1)
                        console.log(this.state.Test2)
                        console.log(this.state.Test3)
                        console.log(this.state.Test4)
                        console.log(this.state.Test5)
                        console.log(this.state.Test6)
                        console.log(this.state.Test7)
                        console.log(this.state.Test8)
                        console.log(this.state.Test9)
                        console.log(this.state.Test10)
            })
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

    checkBoxValue = (e) => {
        
    }

    onSubmit(e) {
        e.preventDefault();

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const newWorkorder = {
            assetId: this.props.match.params.id,
            workorderId: 'WO-' + this.state.asset.Name + '-' + (this.state.count + 1),
            department: this.state.department,
            assetowner: this.state.asset.Assetowner,
            person: this.state.selectPerson,
            email: this.state.persondetail.email, 
            phone: this.state.persondetail.phone,
            date: date,
            status: this.state.status
        }
        const updateTransformertest = {
            assetId: this.props.match.params.id,
            Test1: this.state.Test1,
            Test2: this.state.Test2,
            Test3: this.state.Test3,
            Test4: this.state.Test4,
            Test5: this.state.Test5,
            Test6: this.state.Test6,
            Test7: this.state.Test7,
            Test8: this.state.Test8,
            Test9: this.state.Test9,
            Test10: this.state.Test10
        }

        const mail = {
            email: this.state.persondetail.email,
            template: "externalworkorder"
        }

        console.log(newWorkorder);
        console.log(updateTransformertest);
        console.log(mail);

        axios.post("http://localhost:8089/internalwork/create", newWorkorder)
            .then(response => {
                console.log("Work Order added successfully")
                alert("Work Added")
            }).catch((err) => {
                alert(err)
            })

        axios.put(`http://localhost:8089/test/edit/${this.props.match.params.id}`, updateTransformertest)
            .then(response => {
                console.log('Event successfully added');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })

        // axios.post(`http://localhost:8089/api/sendMail`, mail)
        //     .then(response => {
        //         console.log('mail successfully sent');
        //     }).catch(error => {
        //         console.log(error.message);
        //         alert(error.message);
        //     })


        // window.location = `/asset/${this.props.match.params.id}`
    }


    render() {
        return (

            <div className="row">
                <div class="col col-md-2"> <SideNav /> </div>

                <div class="col-md-10 offset-md-2.5">

                    <div class="container">
                        <h1>Add Work Order</h1>
                        <form  >
                            <div class="form-group row" style={{ display: "flex", border: '15px' }}>

                                <label class="col-sm-2 col-form-label" >Department</label>
                                <div class="col-sm-10" style={{ paddingLeft: '22px' }} >
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
                                <label class="col-sm-2 col-form-label" >Asset ID</label>
                                <div class="col-sm-10">
                                    <input type="type" name="assetId" class="form-control" value={this.state.asset.Name} readOnly />
                                </div>
                            </div>

                            <div class="form-group row" >
                                <label class="col-sm-2 col-form-label" >Asset Owner</label>
                                <div class="col-sm-10">
                                    <input type="type" name="assetowner" class="form-control" value={this.state.asset.Assetowner} readOnly />
                                </div>
                            </div>


                            <div class="form-group row" >
                                <label class="col-sm-2 col-form-label" >Assign To</label>
                                <div class="col-sm-10" style={{ paddingLeft: '22px' }}>
                                    <Select options={this.state.option} onChange={this.onPersonSelect} isMulti />
                                </div>
                            </div>



                            <div class="form-group row" >
                                <label class="col-sm-2 col-form-label" >Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="email" onChange={this.onChange} value={this.state.persondetail.email} readOnly />
                                </div>
                            </div>
                            <div class="form-group row" >
                                <label class="col-sm-2 col-form-label" >Phone Number</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="phone" onChange={this.onChange} value={this.state.persondetail.phone} readOnly />
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
                                            <td><center>{item.name}</center></td>
                                            <td><center>{item.duedate}</center></td>
                                            <td><center>{item.requiredEquipment}</center></td>
                                            <td><center>{item.requiredMatirial}</center></td>
                                            <td><center><input type="checkbox" name ={`Test${(index+1)}`} defaultChecked={item.assign} onChange={this.selectShortlistedApplicant}/></center></td>
                                        </tr>
                                        {/* <td><input type="checkbox" name ='Test1'  onChange={this.selectShortlistedApplicant}/></td> */}

                                    </tbody>
                                ))}
                            </table>

                            <br />
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddWorkOrder;