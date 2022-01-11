import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Treestruc from '../components/asset/tressStructure'
import Sidenav from '../components/navigation/sidenav'
import TopNav from '../components/navigation/topNav'
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from "axios"
import InternalWorkorder from '../components/Internalworkorder/getInternalWorkOrder'
import EXternalWorkorder from '../components/Externalworkorder/getExternalWorkorder'

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



  return (

    <div className="row">
      <div class="col col-lg-2"> <Sidenav /> </div>

      <div className='col'>

        <div className='row'><TopNav name="Asset Management"/></div>
        <div className='row'>
          <div className="col col-lg-12 offset-md-0">
            <div class="container">
              <br/>             
              
              <TabsUnstyled defaultValue={0}>
                <TabsList>
                  <Tab>Internal Workorder Details</Tab>
                  <Tab>External Workorder Details</Tab>
                </TabsList>
                <TabPanel value={0}><InternalWorkorder/></TabPanel>
                <TabPanel value={1}><EXternalWorkorder/>  </TabPanel>
              </TabsUnstyled>
       
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
