import React, { useState } from "react";
import * as ReactBoostStrap from 'react-bootstrap'
import navhead from '../Photos/navhead.png'
import '../../App.css'
import {useAuth0} from '@auth0/auth0-react'

function NavBar() {
    const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()


    return (
        <div>
        {!isAuthenticated ?
        
        <ReactBoostStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="white">
            <ReactBoostStrap.Container>
                <ReactBoostStrap.Navbar.Brand href="/">                    
                        <img className='navheadimg' src={navhead} />
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
            :

            <ReactBoostStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="black">
            <ReactBoostStrap.Container>
                <ReactBoostStrap.Navbar.Brand href="/">                    
                        <img className='navheadimg' src={navhead} />
                </ReactBoostStrap.Navbar.Brand>
                <ReactBoostStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBoostStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBoostStrap.Nav className="me-auto">
                        <ReactBoostStrap.Nav.Link href="#features">Features</ReactBoostStrap.Nav.Link>
                        <ReactBoostStrap.Nav.Link href="#pricing">Pricing</ReactBoostStrap.Nav.Link>
                        <ReactBoostStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <ReactBoostStrap.NavDropdown.Item href="#action/3.1">Action</ReactBoostStrap.NavDropdown.Item>
                            <ReactBoostStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBoostStrap.NavDropdown.Item>
                            <ReactBoostStrap.NavDropdown.Item href="#action/3.3">Something</ReactBoostStrap.NavDropdown.Item>
                            <ReactBoostStrap.NavDropdown.Divider />
                            <ReactBoostStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBoostStrap.NavDropdown.Item>
                        </ReactBoostStrap.NavDropdown>
                    </ReactBoostStrap.Nav>
                    <ReactBoostStrap.Nav>
                        <ReactBoostStrap.Nav.Link href="#deets">More deets</ReactBoostStrap.Nav.Link>
                        <ReactBoostStrap.Nav.Link eventKey={2} onClick={logout}  >
                            Logout
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
