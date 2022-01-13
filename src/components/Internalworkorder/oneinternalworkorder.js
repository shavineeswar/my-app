import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function OneAssetDetails(props) {


  const [Asset, setAsset] = useState("");

  const id = useParams()
  // const [parameter, setparameter] = useState("");
  console.log(id.id)

  function navigateSubjectPage(e, assetId) {
    window.location = `/addworkorder/${assetId}`
  }


  useEffect(() => {
    if (id == null) {
      const parameter = 0

      axios.get(`http://localhost:8089/internalwork/getbyasset/${id.id}`)
        .then(response => {
          console.log('Asset', response.data)
          setAsset(response.data.data)
        })
    }

    else {
      const parameter = id

      axios.get(`http://localhost:8089/internalwork/getbyasset/${id.id}`)
        .then(response => {
          console.log('Asset', response.data)
          setAsset(response.data.data)
        })
    }
  }, [])



  return (
    <div>
      <button onClick={e => navigateSubjectPage(e, id.id)}>Add Test</button>

      <div className="container">
            <h1>Workorder</h1>
            {Asset.length > 0 && Asset.map((item,index) =>(
              <div key={index} className ="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4>{item.department}</h4>
                <h5>{item.date}</h5>
                <h5>{item.dueDate}</h5>
                <h5>{item.priority}</h5>
                <h5>{item.status}</h5>
              </div>
            ))}

          </div>

    </div>


  );

}
