import React, { Component } from 'react'
import { Col, Image, Row, Container } from 'react-bootstrap'
import Treestruc from '../components/asset/tressStructure'
import Oneasset from '../components/asset/oneAsset'
import Table from '../pages/maintainTable'
import "../components/asset/tree.css"

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <br/>

                <div className="row">
                
                    <div className="col col-lg-2 offset-md-0">
                        <div class="container">
                        <Treestruc/>
                        </div>
                        </div>
                
                    
                        <div class="col-md-10 offset-md-2.5">
                            <div class="container">
                            <Oneasset />
                            </div>
                        </div>
                    
                </div>
            </div>


        )
    }
}
