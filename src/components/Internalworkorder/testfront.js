import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'


export default function OneAssetDetails(props) {


    const [Test, setTest] = useState("");
    const [Test1, setTest1] = useState("");
    const [Test2, setTest2] = useState("");
    const [Test3, setTest3] = useState("");
    const [Test4, setTest4] = useState("");
    const [Test5, setTest5] = useState("");
    const [Test6, setTest6] = useState("");
    const [Test7, setTest7] = useState("");
    const [Test8, setTest8] = useState("");
    const [Test9, setTest9] = useState("");
    const [Test10, setTest10] = useState("");
    const [Disable, setDisable] = useState("");
    const [show, setShow] = useState(false);

    const id = useParams()

    const handleClose = () => {
        navigateSubjectPage(id.id)
    };
    
    const handleShow = () => setShow(true);

    

    

    
    function navigateSubjectPage(assetId) {
        
        window.location = `/addworkorder/${assetId}`
    }

    // function onClick(test) {
    //     if (test == "true") {
    //         setTest1("disable")
    //     }
    // }

    console.log(Test.length)

    useEffect(() => {

        axios.get(`http://localhost:8089/transformertest/${id.id}`)
            .then(response => {
                console.log('Test', response.data)
                setTest(response.data.data)
            })
    }, []

    )
    return (
        <div>

            <div className="container">
                <h1>Workorder</h1>
                {Test.length > 0 && Test.map((item, index) => (
                    <div key={index}>

                        <div class="row">
                            <div class="col"><h4> Manitenance Event Name</h4></div>
                            <div class="col"><h4> Event Frequency</h4></div>
                            <div class="col"><h4> Next Due Date</h4></div>
                            <div class="col"><h4> Assigend</h4></div>
                        </div>
                        <div class="row">
                            <div class="col"><h6> Event1</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test1} disabled={Test1} /></div>
                        </div>
                        <div class="row">
                            <div class="col"><h6> Event2</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test2} disabled={Test2} /></div>
                        </div>
                        <div class="row">
                            <div class="col"><h6> Event3</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test3} disabled={Test3} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event4</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test4} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event5</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test5} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event6</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test6} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event7</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test7} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event8</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test8} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event9</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test9} /></div>
                        </div><div class="row">
                            <div class="col"><h6> Event10</h6></div>
                            <div class="col"><h6> 1year</h6></div>
                            <div class="col"><h6> 21-Dec-2021</h6></div>
                            <div class="col"><input type="checkbox" defaultChecked={item.Test10} /></div>
                        </div>

                    </div>
                ))}

            </div>

            <ButtonToolbar>
                <Button variant="primary" onClick={handleShow}>
                    Generate WorkOrder
                </Button>
                <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Work Oder Type</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer
                    aria-labelledby="contained-modal-title-center"
                    centered>

                        <Button variant="secondary" onClick={handleClose}>
                            Internal
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            External
                        </Button>

                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>

        </div>


    );

}
