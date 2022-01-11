import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './tableAssetDetails.css'

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
        <div>
            {Asset ?
                   
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <table class="table table-striped table-bordered mt-3">
                                        <thead>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h4">Asset Name</th>
                                                <td class="h4"><em>{Asset.Name}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Type Category 1</th>
                                                <td><em>{Asset.TypeCategory1}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Type Category 2</th>
                                                <td><em>{Asset.TypeCategory2}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Name of Specification</th>
                                                <td><em>{Asset.NameofSpecification}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Number of phases 1</th>
                                                <td><em>{Asset.Numberofphases1} </em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Number of phases 2</th>
                                                <td><em>{Asset.Numberofphases2}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Rated power (kVA) 1</th>
                                                <td><em>{Asset.Ratedpower1} </em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Nominal voltage (kV) 1</th>
                                                <td><em>{Asset.Nominalvoltage1}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Nominal voltage (kV) 2</th>
                                                <td><em>{Asset.Nominalvoltage2}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Rated Insulation level (kV) 1</th>
                                                <td><em>{Asset.RatedInsulationlevel1}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Rated current (A) 1</th>
                                                <td><em>{Asset.Ratedcurrent1}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Rated Frequency (Hz) </th>
                                                <td><em>{Asset.RatedFrequency}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">SI (switching impulse withstand voltage level) kV</th>
                                                <td><em>{Asset.SI}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">LI (Lightning impulse withstand voltage level) kV2</th>
                                                <td><em>{Asset.LI}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Vector Group 3</th>
                                                <td><em>{Asset.VectorGroup}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Temperature</th>
                                                <td><em>{Asset.Temperature}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Type of Oil</th>
                                                <td><em>{Asset.TypeofOil}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">TC Type</th>
                                                <td><em>{Asset.TCType}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">TC Tap Number 1</th>
                                                <td><em>{Asset.TCTapNumber1}</em></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="w-350 dark-grey-text h6">Coolling Method 1,2</th>
                                                <td><em>{Asset.Cool}</em></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div >

                            </div>
                            :
                            <></>
} 
                        </div>
                    

    );

}
