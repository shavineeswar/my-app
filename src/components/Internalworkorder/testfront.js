import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Modal, Button, ButtonToolbar, table } from 'react-bootstrap'
import './table.css'


export default function OneAssetDetails(props) {


  const [Test, setTest] = useState("");
  const [show, setShow] = useState(false);
  const [Asset, setAsset] = useState("");


  const id = useParams()

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

    axios.get(`http://localhost:8089/asset/${id.id}`)
      .then(response => {
        console.log('Asset', response.data)
        setAsset(response.data.data)
      })

    axios.get(`http://localhost:8089/test/asset/${id.id}`)
      .then(response => {
        console.log('Test', response.data)
        setTest(response.data.data)
      })
  }, []

  )
  return (
    <div>

      <div className="container" >
        <h2>Asset ID:{Asset.Name}</h2>

        <br />


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
              <div key={index}>
                <tr className='tr'>
                  <td>{item.name}</td>
                  <td>{item.eventfrequency}</td>
                  <td>{item.duedate}</td>
                  <td><center><input type="checkbox" defaultChecked={item.assign} disabled="disabled" /></center></td>
                </tr>
              </div>
            
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

    </div>


  );

}
