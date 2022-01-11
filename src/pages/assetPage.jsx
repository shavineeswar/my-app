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



const primary = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  color: ${primary[100]};
  cursor: pointer;
  font-size: 1rem;
  background: ${primary[500]};
  padding: 15px 20px;
  border: none;
  display: flex;
  
  &.Mui-selected {
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    color: #fff;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${primary[600]};
    border-bottom: 2px solid ${primary[600]};
  }

  &.${tabUnstyledClasses.selected} {
    border-bottom: 2px solid #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: ${primary[500]};
  border-radius: 8px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  padding: 0 10px 0 10px;
  margin-bottom: 10px;
  display: flex;
  align-content: space-between;  
`;


export default function UnstyledTabsCustomized() {
  const id = useParams()

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

  return (

    <div className="row">
      <div class="col col-lg-2"> <Sidenav /> </div>

      <div className='col'>

        <div className='row'>
       
          <TopNav name="Asset Management"/></div>
        <div className='row'>
          <div className="col col-lg-2 offset-md-0">
            <div class="container">
              <br />
              <Treestruc />
            </div>
          </div>

          <div class="col-md-9 offset-md-2.5">
            <div class="container">
              <br/>
     
              <button type="button" class="btn btn-outline-success" onClick={onClickAdd}>Add Asset</button>&nbsp;
              <button type="button" class="btn btn-outline-warning" onClick={onClickEdit} >Edit Asset</button>&nbsp;
              <button type="button" class="btn btn-outline-danger" onClick={onClickDelete} >Delete Asset</button>&nbsp;
              <br />
              <br/>
              <center>
              <TabsUnstyled defaultValue={0}>
                <TabsList>
                  <Tab>Asset Details</Tab>
                  <Tab>Maintenace Details</Tab>
                </TabsList>
                <TabPanel value={0}> <Oneasset /> </TabPanel>
                <TabPanel value={1}> <Oneinternalworkorder /> </TabPanel>
              </TabsUnstyled>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
