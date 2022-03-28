import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function OneAssetDetails(props) {


  const [Workorder, setWorkorder] = useState([]);

  const id = useParams()
  // const [parameter, setparameter] = useState("");

  function navigateSubjectPage(e, assetId) {
    window.location = `/addworkorder/${assetId}`
  }

  useEffect(() => {
        axios.get(`http://localhost:8089/internalwork/${id.id}`)
        .then(response => {
          console.log('WorkOrder', response.data)
          setWorkorder(response.data.data)
        })

  }, [])



  return (
    <div>
      {/* <button onClick={e => navigateSubjectPage(e, id.id)}>Add Test</button> */}

      <div className="container">
            <h1>Workorder</h1>
            <div>
            
                <h4>{Workorder.workorderId}</h4>
              </div>
      
          </div>
       

    </div>


  );

}
