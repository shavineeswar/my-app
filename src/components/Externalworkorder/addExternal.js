import React, { Component } from "react";
import axios from "axios"
import Select, { components } from 'react-select'

// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
    assetId: '',
    department: '',
    person: [],
    date: '',
    assetowner: '',
    email:'',
    phone:'',
    company:'',
    C_email:'',
    c_phone:'',
    option: [],
    selectPerson: [],
    Test: [],
    Test1: '',
    Test2: '',
    Test3: '',
    Test4: '',
    Test5: '',
    Test6: '',
    Test7: '',
    Test8: '',
    Test9: '',
    Test10: ''

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

        axios.get(`http://localhost:8089/transformertest/${this.props.match.params.id}`)
            .then(response => {
                console.log('Test', response.data)
                this.setState({ Test: response.data.data }, () => {
                    this.state.Test.map((item, index) => {
                        let test1 = item.Test1
                        let test2 = item.Test2
                        let test3 = item.Test3
                        let test4 = item.Test4
                        let test5 = item.Test5
                        let test6 = item.Test6
                        let test7 = item.Test7
                        let test8 = item.Test8
                        let test9 = item.Test9
                        let test10 = item.Test10


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
            email:this.state.c_email,
            template: "externalworkorder"
        }

        const mailToEmployee = {
            email:this.state.email,
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

        axios.post(`http://localhost:8089/api/sendMail`,mailToEmployee )
            .then(response => {
                console.log('mail successfully sent');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })

        axios.post(`http://localhost:8089/api/sendMail`,mailToCompany )
            .then(response => {
                console.log('mail successfully sent');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
        
    }


    render() {
        return (
            <div class="container" align='center'>
                <h1>Add External Work Order</h1>
                <form align='center'>
                    <div class="form-group row" style={{display: "flex"}}>
                        <label class="col-sm-2 col-form-label">Department</label>
                        <div class="col-sm-10" style={{paddingLeft:'22px'}}>
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
                        <input type="type" name="assetId" class="form-control" value={this.props.match.params.id} readOnly />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Asset Owner</label>
                        <div class="col-sm-10">
                        <input type="type" name="assetowner" class="form-control" onChange={this.onChange} />
                        </div>
                    </div>
                    <br />
                    <div class="container" align="center">
                    <div class="row">
                        <div class="col">
                            <label class="col-sm-3 col-form-label">Assign To (Internal)</label>
                            <br/>
                            <div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Assign To</label>
                                    <div class="col-sm-10" style={{paddingLeft:'12px'}}>
                                    <Select options={this.state.option} onChange={this.onPersonSelect} isMulti />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control"  name="email" onChange={this.onChange} />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Phone Number</label>
                                    <div class="col-sm-10">
                                    <input type="tel" class="form-control" name="phone"  onChange={this.onChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col">
                            <label class="col-sm-3 col-form-label">Assign To (External)</label>
                            <br/>
                            <div >
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Assign To</label>
                                    <div class="col-sm-10" >
                                    <input type="text" class="form-control" name="company" onChange={this.onChange} />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control" name="c_email"  onChange={this.onChange} />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Phone Number</label>
                                    <div class="col-sm-10">
                                    <input type="tel" class="form-control" name="c_phone"  onChange={this.onChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>    

                        <br />
                        <br />
                        <div>
                            {this.state.Test.length > 0 && this.state.Test.map((item, index) => (
                                <div key={index}>

                                    <div class="row">
                                        <div class="col"><h4> Manitenance Event Name</h4></div>
                                        <div class="col"><h4> Next Due Date</h4></div>
                                        <div class="col"><h4> Equipment Required </h4></div>
                                        <div class="col"><h4> Metirial Required </h4></div>
                                        <div class="col"><h4> Remark</h4></div>

                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event1</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test1" value="true" defaultChecked={item.Test1} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event2</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test2" value="true" defaultChecked={item.Test2} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event3</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test3" value="true" defaultChecked={item.Test3} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event4</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test4" value="true" defaultChecked={item.Test4} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event5</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test5" value="true" defaultChecked={item.Test5} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event6</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test6" value="true" defaultChecked={item.Test6} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event7</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>

                                        <div class="col"><input type="checkbox" name="Test7" value="true" defaultChecked={item.Test7} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event8</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test8" value="true" defaultChecked={item.Test8} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event9</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test9" value="true" defaultChecked={item.Test9} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event10</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test10" value="true" defaultChecked={item.Test10} onClick={this.selectShortlistedApplicant} /></div>
                                    </div>

                                </div>
                            ))}
                        </div>
                       
                        <div class="form-group row">
                            <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>

                </form>

                    </div>
        );
    }
}

export default AddWorkOrder;