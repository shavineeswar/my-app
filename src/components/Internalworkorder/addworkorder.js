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
        this.setValueforstates = this.setValueforstates.bind(this);
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
                this.setState({ Test: response.data.data })
            })
              this.setValueforstates()
    }

    setValueforstates(e){
        this.state.Test.map((item, index) => {
            this.setState({ Test1: item.Test1 })
            this.setState({ Test2: item.Test2 })
            this.setState({ Test3: item.Test3 })
            this.setState({ Test4: item.Test4 })
            this.setState({ Test5: item.Test5 })
            this.setState({ Test6: item.Test6 })
            this.setState({ Test7: item.Test7 })
            this.setState({ Test8: item.Test8 })
            this.setState({ Test9: item.Test9 })
            this.setState({ Test10: item.Test10 })
    })
    console.log(this.state.Test1)
    }

    onPersonSelect(e) {
        this.setState({ selectPerson: e ? e.map(item => item.value) : [] });
    }

    onChange(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
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
            date: date,
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

        console.log(newWorkorder);
        console.log(updateTransformertest);

        // axios.post("http://localhost:8089/internalwork/create", newWorkorder)
        //     .then(response => {
        //         console.log("Work Order added successfully")
        //         alert("Work Added")
        //     }).catch((err) => {
        //         alert(err)
        //     })

        axios.put(`http://localhost:8089/transformertest/edit/${this.props.match.params.id}`, updateTransformertest)
            .then(response => {
                alert('Item successfully added');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })


        // window.location = `/asset/${this.props.match.params.id}`
    }


    render() {
        return (
            <div class="container">
                <h1>Add Work Order</h1>
                <form  >
                    <div class="form-group">

                        <label class="form-label">Department</label>
                        <select id="department" class="form-select" name="department" onChange={this.onChange} >
                            <option selected>Choose...</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Production">Production</option>
                            <option value="Civil">Civil</option>
                            <option value="Chemical">Chemical</option>
                            <option value="Mechanical">Mechanical</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <label class="form-label">Asset ID</label>
                        <input type="type" name="assetId" class="form-control" value={this.props.match.params.id} readOnly />
                    </div>

                    <div class="form-group">
                        <label class="form-label">Asset Owner</label>
                        <input type="type" name="assetowner" class="form-control" onChange={this.onChange} />
                    </div>


                    <div class="form-group">
                        <label class="form-label">Assign To</label>
                        <Select options={this.state.option} onChange={this.onPersonSelect} isMulti />

                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" onChange={this.onChange} />

                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" onChange={this.onChange} />
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
                                    <div class="col"><input type="checkbox" name="Test1" value="true" defaultChecked={item.Test1} onChange={this.onChange} /></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h6> Event2</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test2" value="true" defaultChecked={item.Test2} onChange={this.onChange} /></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h6> Event3</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test3" value="true" defaultChecked={item.Test3} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event4</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test4" value="true" defaultChecked={item.Test4} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event5</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test5" value="true" defaultChecked={item.Test5} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event6</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test6" value="true" defaultChecked={item.Test6} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event7</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>

                                    <div class="col"><input type="checkbox" name="Test7" value="true" defaultChecked={item.Test7} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event8</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test8" value="true" defaultChecked={item.Test8} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event9</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test9" value="true" defaultChecked={item.Test9} onChange={this.onChange} /></div>
                                </div><div class="row">
                                    <div class="col"><h6> Event10</h6></div>
                                    <div class="col"><h6> 21-Dec-2021</h6></div>
                                    <div class="col"><input type="checkbox" name="Test10" value="true" defaultChecked={item.Test10} onChange={this.onChange} /></div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <br />
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default AddWorkOrder;