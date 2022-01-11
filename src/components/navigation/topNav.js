import React, { useState } from "react";
import * as ReactBoostStrap from 'react-bootstrap'
import navhead from '../Photos/navhead.png'
import '../../App.css'
import { useAuth0 } from '@auth0/auth0-react'

function NavBar(props) {
    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()


    return (
        <div>
            {!isAuthenticated ?

                <ReactBoostStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="white">
                    <ReactBoostStrap.Container>
                        <ReactBoostStrap.Navbar.Brand >

                        </ReactBoostStrap.Navbar.Brand>
                        <ReactBoostStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBoostStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBoostStrap.Nav className="me-auto"></ReactBoostStrap.Nav>
                            {/* <ReactBoostStrap.Nav className="me-auto"></ReactBoostStrap.Nav> */}
                            <ReactBoostStrap.Nav className="me-auto"><h1>{props.name}</h1></ReactBoostStrap.Nav>

                            
                            <ReactBoostStrap.Nav>
                                <ReactBoostStrap.Nav.Link href="#deets">Contact</ReactBoostStrap.Nav.Link>
                                <ReactBoostStrap.Nav.Link eventKey={2} onClick={loginWithPopup}>Login</ReactBoostStrap.Nav.Link>
                            </ReactBoostStrap.Nav>
                        </ReactBoostStrap.Navbar.Collapse>
                    </ReactBoostStrap.Container>
                </ReactBoostStrap.Navbar>
                :

                <ReactBoostStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="white">
                    <ReactBoostStrap.Container>
                        <ReactBoostStrap.Navbar.Brand href="/">

                        </ReactBoostStrap.Navbar.Brand>
                        <ReactBoostStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBoostStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBoostStrap.Nav className="me-auto">


                            </ReactBoostStrap.Nav>
                            <ReactBoostStrap.Nav>
                                <ReactBoostStrap.Nav.Link href="#deets">Contact</ReactBoostStrap.Nav.Link>
                                <ReactBoostStrap.Nav.Link eventKey={2} onClick={loginWithPopup} >
                                    Login
                                </ReactBoostStrap.Nav.Link>
                            </ReactBoostStrap.Nav>
                        </ReactBoostStrap.Navbar.Collapse>
                    </ReactBoostStrap.Container>
                </ReactBoostStrap.Navbar>
            }
        </div>
    );
}

export default NavBar;
