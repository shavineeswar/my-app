import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Treestruc from '../components/asset/tressStructure'
import Oneasset from '../components/asset/oneAsset'
import Sidenav from '../components/navigation/sidenav'
import Oneinternalworkorder from '../components/Internalworkorder/testfront'
import TopNav from '../components/navigation/topNav'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from 'react';
import AssetTab from '../components/navigation/assetdetailsTab';


export default function UnstyledTabsCustomized() {

  const [Asset, setAsset] = useState("");

  const id = useParams()
  console.log(useParams())
  
  const onClickAdd = () =>{
    window.location = `/drop`
  }  

const onClickEdit = () =>{
  window.location = `/edit/transformer/${id.id}`
}

const onClickDelete = () =>{

  axios.delete(`http://localhost:8089/asset/delete/${id.id}`)   
        .then(response=>{
            alert('Asset Removed');
            window.location.reload();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
}

useEffect(() => {
  if (id.id == undefined) {
      const parameter = 0

      // axios.get(`http://localhost:9999/mysql/transformer/getOne/${0}`)
      //     .then(response => {
      //         console.log('Asset', response.data)
      //         setAsset(response.data)
      //     })
  }

  else {
      const parameter = id

      axios.get(`http://localhost:9999/mysql/transformer/getOne/${id.id}`)
          .then(response => {
              console.log('Asset', response.data)
              setAsset(response.data)
          })
  }


}, [])


  return (

    <div className="row">
      <div class="col col-lg-2"> <Sidenav /> </div>

      <div className='col'>

        <div className='row'>
       
          <TopNav name="Asset Management"/></div>
        <div className='row'>
          <div className="col col-lg-2 ">
            
              <br />
              <Treestruc />
            </div>
        

          <div class="col-md-9 offset-md-2.5">
            <div class="container">
              <br/>
     
              <button type="button" class="btn btn-outline-success" onClick={onClickAdd}>Add Asset</button>&nbsp;            
              <button type="button" class="btn btn-outline-warning" onClick={onClickEdit} >Edit Asset</button>`&nbsp;`
              <button type="button" class="btn btn-outline-danger" onClick={onClickDelete} >Delete Asset</button>&nbsp;
              <br />
              <br/>
              {Asset?
              <center>
              <AssetTab/>
              </center>
              :
              <></>
}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
