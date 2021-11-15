import React, { useState, useParams } from "react";
import axios from "axios"
// import {useAuth0} from '@auth0/auth0-react'



function Form() {

    const [AssetId, setAssetId] = useState("");
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Test, setTest] = useState('');
    const [Comments, setComments] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const id = useParams()

        const newExternal = {
            AssetId:id.id,
            Name,
            Email,
            date:date,
            Phone,
            Test,
            Comments
        }
        console.log(newExternal);
        axios.post("http://localhost:8089/externalwork/create", newExternal)
            .then(response => {
                alert("Blog posted suceesfully")
            }).catch((err) => {
                alert(err)
            })
    }

    return (
        <div class="container">
            <h1>Fill the below details</h1>
            <form  >
                <div class="form-group">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" onChange={(e) => { setName(e.target.value); }} />
                </div>
                
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value); }} />
                </div>

                <div class="form-group">
                    <label class="form-label">Phone</label>
                    <input type="phone" class="form-control" onChange={(e) => { setPhone(e.target.value); }} />
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>

                <div class="form-group">

                    <label class="form-label">Test</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTest(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="Class 0: Oil-immersed">Class 0: Oil-immersed</option>
                        <option value="Class A: Dry Type">Class A: Dry Type</option>
                        <option value="Class K">Class K</option>
                    </select>
                </div>

                <label for="floatingTextarea">Comments</label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Type your blog content here" onChange={(e) => { setComments(e.target.value); }}></textarea>  
                </div>


            </form>

        </div>
    );
}

export default Form;