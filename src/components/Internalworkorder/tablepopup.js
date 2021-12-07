import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Button, ButtonToolbar, Table } from 'react-bootstrap'


export default class OneAssetDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

        

        handleInternal() {
            
        };

        handleExternal() {
            
        };

        handleShow = () => this.setState({show:true});
        handleClose = () => this.setState({show:false});


        navigateExternalworkorderPage = (assetId) => {
            window.location = `/addexternalworkorder/${assetId}`
        }

        navigateInternalworkorderPage = (assetId) => {
            window.location = `/addworkorder/${assetId}`
        }

        render(){
            return (
                <div>
                    <br />
                    <ButtonToolbar>
                        <Button variant="primary" onClick={this.handleShow}>
                            Generate WorkOrder
                        </Button>
                        <Modal show={this.state.show} onHide={this.handleClose}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered >
                            <Modal.Header closeButton>
                                <Modal.Title>Select WorkOrder Type</Modal.Title>
                            </Modal.Header>
                            <Modal.Body align="center">
                                <Button variant="secondary" onClick={this.handleInternal}>
                                    Internal
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="primary" onClick={this.handleExternal}>
                                    External
                                </Button></Modal.Body>
                            <Modal.Footer />
                        </Modal>
                    </ButtonToolbar>

                </div>


            );
        }
    }
