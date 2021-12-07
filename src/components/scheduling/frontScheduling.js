import React, { useMemo, useEffect, useState } from 'react'
import '../Internalworkorder/table.css'
import axios from 'axios';
import { Modal, Button, ButtonToolbar, Table } from 'react-bootstrap'
import SideNav from '../navigation/sidenav'

export default function SortingTable() {

    const [Asset, setAsset] = useState([]);
    const [Email, setEmail] = useState("");
    const [Event1, setEvent1] = useState("");
    const [Event2, setEvent2] = useState("");
    const [Event3, setEvent3] = useState("");
    const [Event4, setEvent4] = useState("");
    const [Event5, setEvent5] = useState("");
    const [Event6, setEvent6] = useState("");
    const [Event7, setEvent7] = useState("");
    const [Event8, setEvent8] = useState("");
    const [Event9, setEvent9] = useState("");
    const [Event10, setEvent10] = useState("");
    const [show, setShow] = useState(false);


    const vectorData = [
        {
            phaseShift: "Select",
            states: ['']
        },
        {
            phaseShift: "TRANSFORMERS",
            states: ['', "Dry Type, <1 MVA", "Oil Cooled, > 1 MVA & < 10 MVA", "Oil Cooled, > 10 MVA & < 50 MVA"]
        },
        {
            phaseShift: "MOTORS",
            states: ['']
        },
        {
            phaseShift: "CONVEYORS",
            states: ['']
        },
        {
            phaseShift: "COMPRESSORS",
            states: ['']
        },
        {
            phaseShift: "MV LV PANELS",
            states: ['']
        },
        {
            phaseShift: "SWITCH GEARS",
            states: ['']
        },
        {
            phaseShift: "CHILLERS",
            states: ['']
        },
        {
            phaseShift: "AC UNITS",
            states: ['']
        },
        {
            phaseShift: "BMS",
            states: ['']
        },
        {
            phaseShift: "ELEVATORS",
            states: ['']
        },
        {
            phaseShift: "FIRE SYSTEM",
            states: ['']
        }, {
            phaseShift: "PROCESS INSTRUMENTATION",
            states: ['']
        },
    ];

    const [{ country, state }, setData] = useState({
        country: "",
        state: ""
    });

    const headers = [
        { "WorkOrder ID": 1, " Generated Date": '20-Dec-2021', 'Due Date': '20/12/2021', 'Status': "Pending" }
    ];

    const vector = vectorData.map((country) => (
        <option key={country.phaseShift} value={country.phaseShift}>
            {country.phaseShift}
        </option>
    ));

    const states = vectorData.find(item => item.phaseShift === country)?.states.map((state) => (
        <option key={state} value={state}>
            {state}
        </option>
    ));

    function handleCountryChange(event) {
        setData(data => ({ state: '', country: event.target.value }));
    }

    function handleStateChange(event) {
        setData(data => ({ ...data, state: event.target.value }));
    }

    // const renderTableHeader = () => {

    //     let header = Object.keys(headers[0])
    //     return header.map((key, index) => {
    //         return <th className='th theader' key={index} onClick={() => this.sortBy(wid && date)}>{key.toUpperCase()}</th>
    //     })
    // }

    const handleUpdate = () => {
        updateSchedulePage()
        setShow(false)
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    function updateSchedulePage(assetId) {

        const updateSchedule = {
            Event1: Event1,
            Event2: Event2,
            Event3: Event3,
            Event4: Event4,
            Event5: Event5,
            Event6: Event6,
            Event7: Event7,
            Event8: Event8,
            Event9: Event9,
            Event10: Event10

        }
        console.log(updateSchedule)

        axios.put(`http://localhost:8089/schedule/update/${"shavineeswar.15@gmail.com"}`, updateSchedule)
            .then(response => {
                console.log('event successfully added');
                alert('Schedule updated');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);

            })
    }

    const setEvents = (A) => {

        A.map((item, index) => {
            
            let event1 = item.eventFrequency[0]
            let event2 = item.eventFrequency[1]
            let event3 = item.eventFrequency[2]
            let event4 = item.eventFrequency[3]
            let event5 = item.eventFrequency[4]
            let event6 = item.eventFrequency[5]
            let event7 = item.eventFrequency[6]
            let event8 = item.eventFrequency[7]
            let event9 = item.eventFrequency[8]
            let event10 = item.eventFrequency[9]

            setEvent1(event1)
            setEvent2(event2)
            setEvent3(event3)
            setEvent4(event4)
            setEvent5(event5)
            setEvent6(event6)
            setEvent7(event7)
            setEvent8(event8)
            setEvent9(event9)
            setEvent10(event10)
        })
    }
    
    useEffect(() => {

        axios.get(`http://localhost:8089/schedule/${"shavineeswar.15@gmail.com"}`)
            .then(response => {
                console.log(response.data.data)
                setAsset(response.data.data,setEvents(response.data.data),
                )
               
            }).catch(error => {
                alert('error.message');
            })
            
    }, []
    )



    return (
        <div >
            <div className="row">
                <div class="col col-md-2"> <SideNav /> </div>

                <div class="col-md-10 offset-md-2.5">

                    <div className="container">
                        {/* <div class="form-group">
                            <label class="form-label">Asset Group (Main)</label>
                            <input type="email" class="form-control" placeholder="example@gmail.com" onChange={(e) => { setEmail(e.target.value); }} />
                        </div>


                        <div class="form-group">
                            <label class="form-label">Asset Group (Main)</label>
                            <br />
                            <select value={country} class="form-select" onChange={handleCountryChange}>
                                {vector}
                            </select>

                            <label class="form-label">Asset Group (Sub)</label>
                            <br />
                            <select value={state} class="form-select" onChange={handleStateChange}>
                                {states}
                            </select>
                        </div> */}

                        {/* <button onClick={renderTableData}> Load</button> */}
                        <br />
                        <br />
                        {Asset ?
                            <div id='tableCon'>

                                <table className='table' id='students'>
                                    <tbody className='tbody'>
                                        <th className='theader th'>Asset Group (Main)</th>
                                        <th className='theader th'>Asset Group (Sub)</th>
                                        <th className='theader th'>Maintenance Event Name</th>
                                        <th className='theader th'>Event Frequency (Recommended)</th>
                                        <th className='theader th'>Event Frequency (Assigned)</th>

                                        {
                                            Asset.length > 0 && Asset.map((item, index) => {
                                                return (

                                                    <tr clasName='tr' key={index} >
                                                        <td >{item.AssetMain}</td>
                                                        <td >{item.AssetSub}</td>
                                                        <td>
                                                            <tr>Event 1</tr>
                                                            <tr>Event 2</tr>
                                                            <tr>Event 3</tr>
                                                            <tr>Event 4</tr>
                                                            <tr>Event 5</tr>
                                                            <tr>Event 6</tr>
                                                            <tr>Event 7</tr>
                                                            <tr>Event 8</tr>
                                                            <tr>Event 9</tr>
                                                            <tr>Event 10</tr>
                                                        </td>
                                                        <td>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>6 Month </tr>
                                                            <tr className='td'>6 Month</tr>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>6 Month</tr>
                                                            <tr className='td'>1 Year</tr>
                                                            <tr className='td'>1 Year</tr>
                                                        </td>

                                                        <td>
                                                            <tr className='td'><input type='text' value={Event1} onChange={(e) => { setEvent1(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event2} onChange={(e) => { setEvent2(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event3} onChange={(e) => { setEvent3(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event4} onChange={(e) => { setEvent4(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event5} onChange={(e) => { setEvent5(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event6} onChange={(e) => { setEvent6(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event7} onChange={(e) => { setEvent7(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event8} onChange={(e) => { setEvent8(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event9} onChange={(e) => { setEvent9(e.target.value); }} /></tr>
                                                            <tr className='td'><input type='text' value={Event10} onChange={(e) => { setEvent10(e.target.value); }} /></tr>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>

                                <br />

                                <ButtonToolbar align="right">
                                    <div align="right">
                                        <Button variant="primary" onClick={handleShow} align='right'>
                                            Change Scheduling Frequencies
                                        </Button>
                                    </div>
                                    <Modal show={show} onHide={handleClose}
                                        size="md"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Are you sure to Change Scheduling Frequencies?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body align="center">
                                            <Button variant="secondary" onClick={handleClose, handleUpdate}>
                                                Yes
                                            </Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button variant="primary" onClick={handleClose}>
                                                No
                                            </Button></Modal.Body>
                                        <Modal.Footer />
                                    </Modal>
                                </ButtonToolbar>

                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}