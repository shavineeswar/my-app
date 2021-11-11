import { useEffect, useState }from 'react';
import axios from 'axios';




export default function OneAssetDetails(props) {

    const [Asset, setAsset] = useState("");

    
    useEffect(() => {
        axios.get(`http://localhost:8089/asset/${props.match.params.id}`)
        .then(response =>{
          console.log('Asset',response.data)
          setAsset(response.data.data)
        })
    
        }, [])

  return (
    <div className="container">
            
            <h1>{Asset.TypeCategory1}</h1>
            <h5>{Asset.TypeCategory2}</h5>
            <h5>{Asset.NameofSpecification} </h5>
            <h5>{Asset.Numberofphases1} </h5>
            <h5>{Asset.Numberofphases2} </h5>
            <h5>{Asset.Ratedpower1} </h5>
            <h5>{Asset.Nominalvoltage1} </h5>
            <h5>{Asset.Nominalvoltage2} </h5>
            <h5>{Asset.RatedInsulationlevel1} </h5>
            <h5>{Asset.Ratedcurrent1} </h5>
            <h5>{Asset.RatedFrequency} </h5>
            <h5>{Asset.SI} </h5>
            <h5>{Asset.LI} </h5>
            <h5>{Asset.VectorGroup} </h5>
            <h5>{Asset.Temperature} </h5>
            <h5>{Asset.TypeofOil} </h5>
            <h5>{Asset.TCType} </h5>
            <h5>{Asset.TCTapNumber1} </h5>
            <h5>{Asset.Cool} </h5>
                         
           

       
          </div>
  );
}
