import React, { Component } from 'react'
import Topnav from '../components/landingpage/navbar'
import Card from '../components/landingpage/cardviews'
import { Col, Image, Row, Container } from 'react-bootstrap'
import '../components/landingpage/landing.css'
import user from '../components/Photos/usermange.jpg'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#d8daece1"}}>
                <Topnav />
                <div>
               
                
                <br/>
                <Container>
                    <Row>
                        <Col><Card heading="User Management" url="https://www.kindpng.com/picc/m/144-1447110_free-organize-png-management-of-change-icon-transparent.png" direct="/assert" /></Col>
                        <Col><Card heading="Alert Management" url="https://c8.alamy.com/zooms/9/fe89b442ff8c4cc39c3678230fd08c1b/2bwj1cf.jpg" direct="/alert" /></Col>
                        <Col><Card heading="Asset Management" url="https://thumbs.dreamstime.com/b/inventory-management-line-icon-vector-illustration-sign-isolated-contour-symbol-black-206722126.jpg" direct="/asset" /></Col>
                    </Row>
                    <Row>
                        <Col><Card heading="Work Order" url="https://www.pngitem.com/pimgs/m/280-2801411_work-order-management-svg-png-work-order-icon.png" direct="/workorder" /></Col>
                        <Col><Card heading="Scheduling" url="https://thumbs.dreamstime.com/b/stay-home-calendar-icon-schedule-isolated-white-background-flat-design-vector-illustration-207789473.jpg" direct="/assert" /></Col>
                        <Col><Card heading="Reporting" url="https://thumbs.dreamstime.com/b/report-icon-vector-isolated-white-background-sign-l-transparent-line-linear-symbol-design-outline-style-133757735.jpg" direct="/assert" /></Col>
                    </Row>
                    <Row>
                        <Col><Card heading="Knowledge Hub" url="https://thumbs.dreamstime.com/b/blog-icon-white-background-simple-vector-icon-black-blog-icon-115752556.jpg" direct="/assert" /></Col>
                        <Col><Card heading="Market Place" url="https://thumbs.dreamstime.com/b/black-solid-icon-market-service-supply-place-transaction-148101798.jpg" direct="/assert" /></Col>
                        <Col><Card heading="Account Managment" url="https://thumbs.dreamstime.com/b/settings-vector-icon-white-background-account-options-settings-vector-icon-white-background-147514142.jpg" direct="/assert" /></Col>
                    </Row>
                </Container>
                </div>
                <br/>
                <br/>
                <br/>
                
            </div>
        )
    }
}
