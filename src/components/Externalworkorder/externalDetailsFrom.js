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

 

    render() {
        return (
            <div class="container" align='center'>
                <h1>Details of External Work Order</h1>
                <form align='center'>
                    <div class="form-group row" style={{display: "flex"}}>
                        <label class="col-sm-2 col-form-label">Department</label>
                        <div class="col-sm-10" style={{paddingLeft:'22px'}}>
                        <input type="type"  class="form-control"  />
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
                        <input type="type" name="assetowner" class="form-control"  />
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
                                    <input type="type" class="form-control"  />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control"  name="email"  />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Phone Number</label>
                                    <div class="col-sm-10">
                                    <input type="tel" class="form-control" name="phone" />
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
                                    <input type="text" class="form-control" name="company" readOnly />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control" name="c_email"  readOnly />
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3" style={{display: "flex"}}>
                                    <label class="col-sm-2 col-form-label">Phone Number</label>
                                    <div class="col-sm-10">
                                    <input type="tel" class="form-control" name="c_phone"  readOnly />
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
                                        <div class="col"><input type="checkbox" name="Test1" value="true" defaultChecked={item.Test1} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event2</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test2" value="true" defaultChecked={item.Test2} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event3</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test3" value="true" defaultChecked={item.Test3} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event4</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test4" value="true" defaultChecked={item.Test4} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event5</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test5" value="true" defaultChecked={item.Test5} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event6</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test6" value="true" defaultChecked={item.Test6} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event7</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>

                                        <div class="col"><input type="checkbox" name="Test7" value="true" defaultChecked={item.Test7} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event8</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test8" value="true" defaultChecked={item.Test8} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event9</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test9" value="true" defaultChecked={item.Test9} disable='disable' /></div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><h6> Event10</h6></div>
                                        <div class="col"><h6> 21-Dec-2021</h6></div>
                                        <div class="col"><input type="checkbox" name="Test10" value="true" defaultChecked={item.Test10} disable='disable' /></div>
                                    </div>

                                </div>
                            ))}
                        </div>
                </form>

                    </div>
        );
    }
}

export default AddWorkOrder;