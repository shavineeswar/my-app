import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function OneAssetDetails(props) {


    const [Asset, setAsset] = useState("");

    const id = useParams()
    // const [parameter, setparameter] = useState("");
    console.log(id.id)

    function navigateSubjectPage(e, assetId) {
        window.location = `/addTest/${assetId}`
      }


    useEffect(() => {
        if (id == null) {
            const parameter = 0

            axios.get(`http://localhost:8089/asset/${id.id}`)
                .then(response => {
                    console.log('Asset', response.data)
                    setAsset(response.data.data)
                })
        }

        else {
            const parameter = id

            axios.get(`http://localhost:8089/asset/${id.id}`)
                .then(response => {
                    console.log('Asset', response.data)
                    setAsset(response.data.data)
                })
        }


    }, [])



    return (
        <div className="container">
            <h1>{Asset.Name}</h1>
            <h5>{Asset.TypeCategory1}</h5>
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
