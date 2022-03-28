import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Modal, Button, ButtonToolbar, table } from 'react-bootstrap'
import './table.css'
import AssetTab from '../navigation/assetdetailsTab'


export default function OneAssetDetails(props) {


  const [Test, setTest] = useState("");
  const [show, setShow] = useState(false);
  const [Asset, setAsset] = useState("");
  


  const id = useParams()
  console.log(id)

  const handleInternal = () => {
    navigateInternalworkorderPage(id.id)
  };

  const handleExternal = () => {
    navigateExternalworkorderPage(id.id)
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)


  function navigateExternalworkorderPage(assetId) {
    window.location = `/addexternalworkorder/${assetId}`
  }

  function navigateInternalworkorderPage(assetId) {
    window.location = `/addworkorder/${assetId}`
  }

  console.log(Test.length)

  useEffect(() => {

    if (id.id == undefined) {
      const parameter = 0

      axios.get(`http://localhost:9999/mysql/transformer/getOne/${0}`)
          .then(response => {
              console.log('Asset', response.data)
              setAsset(response.data)
          })
  }

  else {
      const parameter = id

      axios.get(`http://localhost:9999/mysql/transformer/getOne/${id.id}`)
          .then(response => {
              console.log('Asset', response.data)
              setAsset(response.data)
          })
    }

    axios.get(`http://localhost:8089/test/asset/${id.id}`)
      .then(response => {
        console.log('Test', response.data)       
        setTest(response.data.data)
        response.data.data.map((item,index) => {

        })
      })
  }, []

  )
  return (
    <div>
      {/* <AssetTab/> */}
      <h2>Asset ID:{`Transformer ${Asset.transformerId}`}</h2>
      <br />
      <div className="container" >
       
        <table striped bordered responsive hover size="md" >
          <thead>
            <tr className='tr'>
              <th className='theader th'>Manitenance Event Name</th>
              <th className='theader th'> Event Frequency</th>
              <th className='theader th'>Next Due Date</th>
              <th className='theader th'>Assigned</th>
            </tr>
          </thead>
            {Test.length > 0 && Test.map((item, index) => (
              <tbody>
              
                <tr className='tr'>
                  <td><center>{item.name}</center></td>
                  <td><center>{item.eventfrequency}</center></td>
                  <td><center>{item.duedate}</center></td>
                  <td><center><input type="checkbox" defaultChecked={item.assign} disabled="disabled" /></center></td>
                </tr>            
          </tbody>
          ))}
        </table>
      </div>
      <br />
      <ButtonToolbar>
        <Button variant="primary" onClick={handleShow}>
          Generate WorkOrder
        </Button>
        <Modal show={show} onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered >
          <Modal.Header closeButton>
            <Modal.Title>Select WorkOrder Type</Modal.Title>
          </Modal.Header>
          <Modal.Body align="center">
            <Button variant="secondary" onClick={handleInternal}>
              Internal
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={handleExternal}>
              External
            </Button></Modal.Body>
          <Modal.Footer />
        </Modal>
      </ButtonToolbar>

              <br/>

    </div>


  );

}
