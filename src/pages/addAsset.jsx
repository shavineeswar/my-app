import React, { useState } from "react";
import axios from "axios"
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
    const [CoollingMethod1, setCoollingMethod1] = useState('');
    const [CoollingMethod2, setCoollingMethod2] = useState('');
    const [CoollingMethod3, setCoollingMethod3] = useState('');
    const [CoollingMethod4, setCoollingMethod4] = useState('');

    // const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()

    const [{ country, state }, setData] = useState({
        country: "0",
        state: ""
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



    function onSubmit(e) {
        e.preventDefault();

        const VectorGroup = country + "-" + state;
        const Cool = CoollingMethod1 + CoollingMethod2 + CoollingMethod3 + CoollingMethod4;

        const newAssert = {
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

        // try{
        //     const token =  getAccessTokenSilently();
        //     const response =  axios.post('http://localhost:8089/assert/create',newAssert,{
        //         headers:{
        //             authorization:`Bearer ${token}`
        //         },
        //     });
        //     console.log(response.data);
        //     alert("Assert Added")
        // }catch(error){
        //     console.log(error.message);
        // }
         
        console.log(newAssert);
        axios.post("http://localhost:8089/asset/create", newAssert)
            .then(response => {
                
                const assetID = response.data.data._id 
                console.log(response.data.data._id);

                const current = new Date();
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                
                console.log(assetID);
                                
                const newAlert={
                    assetId: assetID,
                    assetName : TypeCategory1,
                    date:date,
                    period:'6',
                    alert1:'6',
                    alert2:'3',
                    alert3:'',
                    alert4:'',
                }    

                console.log(newAlert);
                
                axios.post("http://localhost:8089/alert/create", newAlert)
            .then(response => {              
                alert("Assert Added")
            }).catch((err) => {
                alert(err)
            })

                alert("Assert Added")
                
            }).catch((err) => {
                alert(err)
            })
            // console.log(assetID)

       
        
    }



    

    return (
        <div class="container">
                <h1>Add Asset Details</h1>
            <form  >
                <div class="form-group">

                    <label class="form-label">Type Category 1</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTypeCategory1(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="Class 0: Oil-immersed">Class 0: Oil-immersed</option>
                        <option value="Class A: Dry Type">Class A: Dry Type</option>
                        <option value="Class K">Class K</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">Type Category 2</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTypeCategory2(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="Power Transformer">Power Transformer</option>
                        <option value="Auto Transformer">Auto Transformer</option>
                        <option value="Booster Transformer">Booster Transformer</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">Name of specification</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setNameofSpecification(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="IEEE C57.12">IEEE C57.12</option>
                        <option value="IEC 60076">IEC 60076</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="ford  m-label">Number of phases 1</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setNumberofphases1(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">Number of phases 2</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setNumberofphases2(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">Rated Power(kVA)</label>
                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setRatedpower1(e.target.value); }} />

                </div>

                <div class="form-group">

                    <label class="form-label">Nominal Voltage 1</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setNominalvoltage1(e.target.value); }}>
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

                <div class="form-group">

                    <label class="form-label">Nominal Volatge 2</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setNominalvoltage2(e.target.value); }}>
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


                <div class="form-group">
                    <label class="form-label">Rated Insulation level (kV)</label>
                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setRatedInsulationlevel1(e.target.value); }} />
                </div>

                <div class="form-group">
                    <label class="form-label">Rated Current(A)</label>
                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setRatedcurrent1(e.target.value); }} />
                </div>

                <div class="form-group">

                    <label class="form-label">Rated Frequency</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setRatedFrequency(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="50Hz">50Hz</option>

                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">SI (switching impulse withstand voltage level) kV</label>
                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setSI(e.target.value); }} />
                </div>

                <div class="form-group">
                    <label class="form-label">LI (Lightning impulse withstand voltage level) kV</label>
                    <input type="type" class="form-control" placeholder="([1-9][1-9][1-9][/]*{2}[1-9][1-9][1-9])" onChange={(e) => { setLI(e.target.value); }} />
                </div>


                <div class="form-group">
                    <label class="form-label">Vector</label>
                    <br />
                    <select value={country} class="form-select" onChange={handleCountryChange}>
                        {vector}
                    </select>

                    <select value={state} class="form-select" onChange={handleStateChange}>
                        {states}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Temeperature</label>
                    <input type="type" class="form-control" placeholder="0" onChange={(e) => { setTemperature(e.target.value); }} />
                </div>


                <div class="form-group">

                    <label class="form-label">Type of Oil</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTypeofOil(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="Mineral">Mineral</option>
                        <option value="Synthetic (Inhibited)">Synthetic (Inhibited)</option>
                        <option value="Synthetic (Non-Inhibited)">Synthetic (Non-Inhibited)3</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">Charger Type</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTCType(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="None">None</option>
                        <option value="No-Load">No-Load</option>
                        <option value="On-Load">On-Load</option>
                    </select>
                </div>

                <div class="form-group">

                    <label class="form-label">TC Tap Number</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setTCTapNumber1(e.target.value); }}>
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

                <div class="form-group">

                    <label class="form-label">Coolling Method</label>
                    <label class="form-label">First letter</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setCoollingMethod1(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="O">O - Liquid with a flash point less than or equal to 3000°C</option>
                        <option value="K">K - Liquid with a flash point grater than 3000°C </option>
                        <option value="L">L - Liquid with no measurable flashpoint</option>
                    </select>

                    <label class="form-label">Second letter</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setCoollingMethod2(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="N">N - Natural convenction through cooling equipment and windings</option>
                        <option value="F">F - Forced circulation through cooling equipment, natural converstion in windings  </option>
                        <option value="D">D - Forced circulation through cooling equipment, directed flow in man windings</option>
                    </select>

                    <label class="form-label">Third letter</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setCoollingMethod3(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="A">A - Air</option>
                        <option value="W">W - Water</option>
                    </select>

                    <label class="form-label">Fourth letter</label>
                    <select id="category" class="form-select" name="category" onChange={(e) => { setCoollingMethod4(e.target.value); }}>
                        <option selected>Choose...</option>
                        <option value="N">N - Natural Convention</option>
                        <option value="F">W - Forced Circulation</option>
                    </select>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Form;