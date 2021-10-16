import React, { useEffect, useState } from "react"
import { Redirect } from 'react-router-dom'
import '../login.css'
import axios from "axios"
import img from '../resoureces/LOGOonly.png'

function Login() {
    const [email, setUsernameLog] = useState("");
    const [password, setPasswordLog] = useState("");

    const [A, setA] = useState("")
    const [B, setB] = useState("")

    const zero = 0;

    function login(e) {
        e.preventDefault();

        const oldUser = {
            email,
            password
        }

        axios.post("http://localhost:8089/userlogin/login", oldUser).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                window.location = ''
            } else {
                alert("login Success")

                console.log(email)
                window.location='/'
                localStorage.setItem("token", response.data.token)
                return (<Redirect to="./post" />)
            }
        }).catch((err) => {
            alert(err)
        })
    }
    
    return (
        <div class="login" align="center">

            <div class="box" align="center" >
                <form>
                    <div class="form-group">
                        <div >
                            <div>
                                <img src={img}></img>
                            </div>
                            <div>
                                <h3 class="loginhead">User Login</h3>
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input class="form-control" type="text" placeholder="Enter your E-mail" align="center" onChange={(e) => {setUsernameLog(e.target.value);}} ></input>
                            </div>

                            <div class="form-group">
                                <div>

                                    <input class="form-control" type="password" placeholder="Enter your Password" onChange={(e) => {setPasswordLog(e.target.value);}}></input>
                                </div>

                                <div class="createaccount" align="right">
                                    <span ><a href="/register">Create An Accounct</a></span>
                                </div>
                                <div>
                                    <button class="loginbtn" type="submit" onClick={login}>login</button>
                                </div>
                            </div>

                            <h3>{A}</h3>
                        <h3>{B}</h3>

                        </div>
                    </div>

                </form>
            </div>
        </div>

    );
}

export default Login;