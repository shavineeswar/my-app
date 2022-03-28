import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Oneasset from '../asset/oneAsset'
import Oneinternalworkorder from '../Internalworkorder/oneinternalworkorder'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';


export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [Asset, setAsset] = useState("");

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    );
  };
  function navigateSubjectPage(e, assetId) {
    window.location = `/asset/${assetId}`

  }

  useEffect(() => {

    axios.get('http://localhost:9999/mysql/transformer/get')
      .then(response => {
        console.log('ALL asset', response.data)
        setAsset(response.data)
      })


  }, [])

  return (
    <>
      <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>

        <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          <TreeItem nodeId="1" label="Transfromers">
            {Asset.length > 0 && Asset.map((item, index) => (    
              <TreeItem key={index} onClick={e => {navigateSubjectPage(e, item.transformerId)}} nodeId={(index + 1)} label ={`Tranfromers ${item.transformerId}`}>
              </TreeItem>
            ))}
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="6" label="MUI" >
              <TreeItem nodeId="7" label="src">
                <TreeItem nodeId="8" label="index.js" />
                <TreeItem nodeId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Box>


    </>
  );
}
