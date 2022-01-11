import React, { useEffect, useState } from "react";
import axios from "axios"
import Select from 'react-select'
import { useParams } from 'react-router-dom';
import Sidenav from '../navigation/sidenav'
import TopNav from '../navigation/topNav'
import AsyncSelect from 'react-select/async'

// import {useAuth0} from '@auth0/auth0-react'

const vectorData = [
    {
        phaseShift: "0",
        states: ["Yy0", "Ddo", "Dz0"]
    },
    {
        phaseShift: "30 lag",
        states: ["Yd1", "Dy1", "yz1"]
    },
    {
        phaseShift: "60 lag",
        states: ["Dd2", "Dz2"]
    },
    {
        phaseShift: "120 lag",
        states: ["Dd4", "Dz4"]
    },
    {
        phaseShift: "150 lag",
        states: ["Yd5", "Dy5", "Yz5"]
    },
    {
        phaseShift: "180 lag",
        states: ["Yy6", "Dd6", "Dz6"]
    },
    {
        phaseShift: "150 lead",
        states: ["Yd7", "Dy7", "Yz7"]
    },
    {
        phaseShift: "120 lead",
        states: ["Dd8", "Dz8"]
    },
    {
        phaseShift: "60 lead",
        states: ["Dd10", "Dz10"]
    },
    {
        phaseShift: "30 lead",
        states: ["Yd11", "Dy11", "Yz11"]
    }
];



function Form() {
    // const [AssetId, setAssetId] = useState("");
    const [Asset, setAsset] = useState("");
    const [Owner, setOwner] = useState("");
    const [TypeCategory1, setTypeCategory1] = useState("");
    const [TypeCategory2, setTypeCategory2] = useState('');
    const [NameofSpecification, setNameofSpecification] = useState('');
    const [Numberofphases1, setNumberofphases1] = useState('');
    const [Numberofphases2, setNumberofphases2] = useState('');
    const [Ratedpower1, setRatedpower1] = useState('');
    const [Nominalvoltage1, setNominalvoltage1] = useState('');
    const [Nominalvoltage2, setNominalvoltage2] = useState('');
    const [RatedInsulationlevel1, setRatedInsulationlevel1] = useState('');
    const [Ratedcurrent1, setRatedcurrent1] = useState('');
    const [RatedFrequency, setRatedFrequency] = useState('');
    const [SI, setSI] = useState('');
    const [LI, setLI] = useState('');
    const [Temperature, setTemperature] = useState('');
    const [TypeofOil, setTypeofOil] = useState('');
    const [TCType, setTCType] = useState('');
    const [TCTapNumber1, setTCTapNumber1] = useState('');
    const [CoollingMethod, setCoollingMethod] = useState('');
    const [CoollingMethod1, setCoollingMethod1] = useState('');
    const [CoollingMethod2, setCoollingMethod2] = useState('');
    const [CoollingMethod3, setCoollingMethod3] = useState('');
    const [CoollingMethod4, setCoollingMethod4] = useState('');
    const [Count, setCount] = useState('');
    const [Assetowner, setAssetowner] = useState('');
    const [Person, setPerson] = useState([]);
    const [Option, setOption] = useState([]);
    const [SelectedPerson, setSelectedPerson] = useState([]);
    const [Vector, setVector] = useState([]);

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()

    const id = useParams()
    console.log(CoollingMethod)
    console.log(CoollingMethod1)
    console.log(CoollingMethod2)
    console.log(CoollingMethod3)
    console.log(CoollingMethod4)
    console.log(Owner[0])
    console.log(Assetowner.personName)
    const asseto = Assetowner.personName
    
    console.log(asseto)
    console.log(Option)
    console.log(Vector)



    const vg = Vector.toString()

    const v = vg.split('-')
    const v1 = v.toString()

    console.log(v[1])


    const assetow = Option.map((owner) => (
        <option value={owner.value}>{owner.label}</option>
    ))

    const [{ country, state }, setData] = useState({
        country: v[0],
        state: v[1]
    });

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

    function onPersonSelect(e) {
        setSelectedPerson(e ? e.map(item => item.value) : []);
    }
 

    useEffect(() => {

        axios.get(`http://localhost:8089/asset/${id.id}`)
            .then(response => {
                console.log('Asset', response.data)
                setAsset(response.data.data)

                setTypeCategory1(response.data.data.TypeCategory1)
                setTypeCategory2(response.data.data.TypeCategory2)
                setNameofSpecification(response.data.data.NameofSpecification)
                setNumberofphases1(response.data.data.Numberofphases1)
                setNumberofphases2(response.data.data.Numberofphases2)
                setRatedpower1(response.data.data.Ratedpower1)
                setNominalvoltage1(response.data.data.Nominalvoltage1)
                setNominalvoltage2(response.data.data.Nominalvoltage2)
                setRatedInsulationlevel1(response.data.data.RatedInsulationlevel1)
                setRatedcurrent1(response.data.data.Ratedcurrent1)
                setRatedFrequency(response.data.data.RatedFrequency)
                setSI(response.data.data.SI)
                setLI(response.data.data.LI)
                setTemperature(response.data.data.Temperature)
                setTypeofOil(response.data.data.TypeofOil)
                setTCType(response.data.data.TCType)
                setTCTapNumber1(response.data.data.TCTapNumber1)
                setCoollingMethod(response.data.data.Cool)
                setVector(response.data.data.VectorGroup)
                setOwner(response.data.data.Assetowner)

                setCoollingMethod1(response.data.data.Cool.slice(0, 1))
                setCoollingMethod2(response.data.data.Cool.slice(1, 2))
                setCoollingMethod3(response.data.data.Cool.slice(2, 3))
                setCoollingMethod4(response.data.data.Cool.slice(3, 4))


                axios.get(`http://localhost:8089/person/${response.data.data.Assetowner[0]}`).then(response => {
                    setAssetowner(response.data.data)
                    console.log(response.data.data);
                }).catch(error => {
                    alert('error.message');
                })


            })




        axios.get('http://localhost:8089/person/getall')
            .then(response => {
                console.log('person', response.data.data)
                setPerson(response.data.data)

                const setPersonOption = () => {
                    let data = [];
                    response.data.data.map((item1, index) => {
                        let person = {
                            value: item1._id,
                            label: item1.personName
                        }

                        console.log(person)
                        data.push(person)
                    });
                    console.log(data)
                    setOption(data)
                }

                setPersonOption();
                console.log(Option)
            })
    }, [])


    function onSubmit(e) {
        e.preventDefault();

        const VectorGroup = country + "-" + state;
        const Cool = CoollingMethod1 + CoollingMethod2 + CoollingMethod3 + CoollingMethod4;

        const newAssert = {
            Assetowner: SelectedPerson,
            TypeCategory1,
            TypeCategory2,
            NameofSpecification,
            Numberofphases1,
            Numberofphases2,
            Ratedpower1,
            Nominalvoltage1,
            Nominalvoltage2,
            RatedInsulationlevel1,
            Ratedcurrent1,
            RatedFrequency,
            SI,
            LI,
            VectorGroup,
            Temperature,
            TypeofOil,
            TCType,
            TCTapNumber1,
            Cool
        }

        console.log(newAssert);
        // axios.put(`http://localhost:8089/asset/edit/${id.id}`, newAssert)
        //     .then(response => {
        //         alert("Assert Edited")
        //     }).catch((err) => {
        //         alert(err)
        //     })





    }

    return (

        <div className="row">
            <div class="col col-lg-2"> <Sidenav /> </div>

            <div className='col'>

                <div className='row'><TopNav name='Edit Asset Details' /></div>
                <div className='row'>
                    <div class="container" >
                        <br />


                        <form>

                            <div class="form-group row row" >
                                <label class="col-sm-4 col-form-label" >Asset Owner</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>

                                    {/* <Select options={Option} onChange={onPersonSelect} isMulti className="basic-multi-select" classNamePrefix="select"/> */}

                                    <select id="category" class="form-select" name="category" value={Owner} onChange={(e) => { setSelectedPerson(e.target.value); }}>
                                        {assetow}
                                    </select>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Type Category 1</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}><select id="category" class="form-select" name="category" value={TypeCategory1} onChange={(e) => { setTypeCategory1(e.target.value); }}>
                                    <option selected>Choose...</option>
                                    <option value="Class 0: Oil-immersed">Class 0: Oil-immersed</option>
                                    <option value="Class A: Dry Type">Class A: Dry Type</option>
                                    <option value="Class K">Class K</option>
                                </select></div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Type Category 2</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={TypeCategory2} onChange={(e) => { setTypeCategory2(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="Power Transformer">Power Transformer</option>
                                        <option value="Auto Transformer">Auto Transformer</option>
                                        <option value="Booster Transformer">Booster Transformer</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Name of specification</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={NameofSpecification} onChange={(e) => { setNameofSpecification(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="IEEE C57.12">IEEE C57.12</option>
                                        <option value="IEC 60076">IEC 60076</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Number of phases 1</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={Numberofphases1} onChange={(e) => { setNumberofphases1(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Number of phases 2</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={Numberofphases2} onChange={(e) => { setNumberofphases2(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Rated Power(kVA)</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" defaultValue={Ratedpower1} onChange={(e) => { setRatedpower1(e.target.value); }} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nominal Voltage 1</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={Nominalvoltage1} onChange={(e) => { setNominalvoltage1(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="230V">230V</option>
                                        <option value="400V">400V</option>
                                        <option value="415V">415V</option>
                                        <option value="690V">690V</option>
                                        <option value="6.6kV">6.6kV</option>
                                        <option value="11kV">11kV</option>
                                        <option value="33kV">33kV</option>
                                        <option value="132kV">132kV</option>
                                        <option value="220kV">220kv</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nominal Volatge 2</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={Nominalvoltage2} onChange={(e) => { setNominalvoltage2(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="230V">230V</option>
                                        <option value="400V">400V</option>
                                        <option value="415V">415V</option>
                                        <option value="690V">690V</option>
                                        <option value="6.6kV">6.6kV</option>
                                        <option value="11kV">11kV</option>
                                        <option value="33kV">33kV</option>
                                        <option value="132kV">132kV</option>
                                    </select>
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Rated Insulation level (kV)</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" defaultValue={RatedInsulationlevel1} onChange={(e) => { setRatedInsulationlevel1(e.target.value); }} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Rated Current(A)</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" defaultValue={Ratedcurrent1} onChange={(e) => { setRatedcurrent1(e.target.value); }} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Rated Frequency</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={RatedFrequency} onChange={(e) => { setRatedFrequency(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="50Hz">50Hz</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">SI (switching impulse withstand voltage level) kV</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" defaultValue={SI} onChange={(e) => { setSI(e.target.value); }} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">LI (Lightning impulse withstand voltage level) kV</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setLI(e.target.value); }} defaultValue={LI} />
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Vector</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>

                                    <select value={country} class="form-select" value={v[0]} onChange={handleCountryChange}>
                                        {vector}
                                    </select>
                                    <br />
                                    <select value={state} class="form-select" value={v[1]} onChange={handleStateChange}>
                                        {states}
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Temeperature</label>
                                <div class="col-sm-8" >
                                    <input type="type" class="form-control" placeholder="0" defaultValue={Temperature} onChange={(e) => { setTemperature(e.target.value); }} />
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Type of Oil</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={TypeofOil} onChange={(e) => { setTypeofOil(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="Mineral">Mineral</option>
                                        <option value="Synthetic (Inhibited)">Synthetic (Inhibited)</option>
                                        <option value="Synthetic (Non-Inhibited)">Synthetic (Non-Inhibited)3</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Charger Type</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={TCType} onChange={(e) => { setTCType(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="None">None</option>
                                        <option value="No-Load">No-Load</option>
                                        <option value="On-Load">On-Load</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">TC Tap Number</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={TCTapNumber1} onChange={(e) => { setTCTapNumber1(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label >Coolling Method</label>
                                <br />
                                <label class="col-sm-4 col-form-label">First letter</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={CoollingMethod1} onChange={(e) => { setCoollingMethod1(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="O">O - Liquid with a flash point less than or equal to 3000°C</option>
                                        <option value="K">K - Liquid with a flash point grater than 3000°C </option>
                                        <option value="L">L - Liquid with no measurable flashpoint</option>
                                    </select>
                                </div>

                                <br />
                                <label class="col-sm-4 col-form-label">Second letter</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={CoollingMethod2} onChange={(e) => { setCoollingMethod2(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="N">N - Natural convenction through cooling equipment and windings</option>
                                        <option value="F">F - Forced circulation through cooling equipment, natural converstion in windings  </option>
                                        <option value="D">D - Forced circulation through cooling equipment, directed flow in man windings</option>
                                    </select>
                                </div>

                                <br />
                                <label class="col-sm-4 col-form-label">Third letter</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={CoollingMethod3} onChange={(e) => { setCoollingMethod3(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="A">A - Air</option>
                                        <option value="W">W - Water</option>
                                    </select>
                                </div>

                                <br />
                                <label class="col-sm-4 col-form-label">Fourth letter</label>
                                <div class="col-sm-8" style={{ paddingLeft: '22px' }}>
                                    <select id="category" class="form-select" name="category" value={CoollingMethod4} onChange={(e) => { setCoollingMethod4(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="N">N - Natural Convention</option>
                                        <option value="W">W - Forced Circulation</option>
                                    </select>
                                </div>

                            </div>

                            <div class="form-group row">
                                <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;