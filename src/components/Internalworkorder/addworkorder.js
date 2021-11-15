import React, { Component, useEffect, useState } from "react";
import axios from "axios"
import Select, { components } from 'react-select'
// import {useAuth0} from '@auth0/auth0-react'

const initialState = {
    assetId: '',
    department: '',
    person: [],
    date: '',
    priority: '',
    dueDate: '',
    status: '',
    option:[],
    selectPerson:[]


}

class AddWorkOrder extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPersonSelect = this.onPersonSelect.bind(this);
        this.state = initialState;
    }

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()




    componentDidMount() {
        axios.get('http://localhost:8089/person/getall')
            .then(response => {
               this.setState({person:response.data.data},()=>{
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
                this.setState({option: data})
                

            })

        })
    }

    onPersonSelect(e) {
        this.setState({selectPerson: e ? e.map(item => item.value) : []});
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        
        
        const newWorkorder = {
            assetId: this.props.match.params.id,
            department: this.state.department,
            person: this.state.selectPerson,
            date: this.state.date,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            status: "Not Finished",
        }

        console.log(newWorkorder);
        axios.post("http://localhost:8089/internalwork/create", newWorkorder)
            .then(response => {
                console.log("Work Order added successfully")
                alert("Work Added")
            }).catch((err) => {
                alert(err)
            })

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

                        <label class="form-label">Person</label>
                        <Select options={this.state.option} onChange={this.onPersonSelect} isMulti/>


                    </div>

                    <div class="form-group">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" name="date" onChange={this.onChange} />
                    </div>

                    <div class="form-group">
                        <label class="form-label">Due Date</label>
                        <input type="date" class="form-control" name="dueDate" onChange={this.onChange} />
                    </div>

                    <div class="form-group">
                        <label class="form-label">Priority</label>
                        <select id="priority" class="form-select" name="priority" onChange={this.onChange}>
                            <option selected>Choose...</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default AddWorkOrder;