import React, {Component } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Button, ButtonToolbar, Table } from 'react-bootstrap'
import axios from 'axios';

export default class OneAssetDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleComplete = this.handleComplete.bind(this);
    }

    

    handleComplete() {

        const editStatus = {
            status: 'Completed'
        }

        axios.put(`http://localhost:8089/internalwork/edit/${this.props.match.params.id}`, editStatus)
            .then(response => {
                window.location = `/workorder` 
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    };

    handleCancel() {
        window.location = `/workorder`    
    };

    handleShow = () => this.setState({ show: true });
    handleClose = () => this.setState({ show: false });


    // navigateExternalworkorderPage = (assetId) => {
    //     window.location = `/addexternalworkorder/${assetId}`
    // }

    // navigateInternalworkorderPage = (assetId) => {
    //     window.location = `/addworkorder/${assetId}`
    // }

    render() {
        return (
            <div>
                <br />
                <ButtonToolbar>
                    {/* <Button variant="primary" onClick={this.handleShow}>
                            Change the status of workorder
                        </Button> */}

                    <Modal show={this.state.show} onHide={this.handleClose}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered >
                        <Modal.Header closeButton>
                            <center><Modal.Title>&emsp;&emsp;&emsp;&emsp;Select WorkOrder Status</Modal.Title></center>
                        </Modal.Header>
                        <Modal.Body align="center">
                            <Button style={{background:'green',boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",border:'none'}} onClick={this.handleComplete}>
                                Completed
                            </Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button style={{background:'#FFA500',boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",border:'none'}} onClick={this.handleCancel}>
                                Pending
                            </Button></Modal.Body>
                        <Modal.Footer />
                    </Modal>
                </ButtonToolbar>

            </div>


        );
    }
}
