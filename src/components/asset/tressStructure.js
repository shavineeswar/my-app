import * as React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState }from 'react';
import axios from 'axios';


export default function FileSystemNavigator() {

    const [Asset, setAsset] = useState("");

    function navigateSubjectPage(e, assetId) {
        window.location = `/asset/${assetId}`
      }

    useEffect(() => {
   
        axios.get('http://localhost:8089/asset/getall')
        .then(response =>{
          console.log('ALL Blog',response.data)
          setAsset(response.data.data)
        })
    
        }, [])

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 300, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Transformers">
      {Asset.length > 0 && Asset.map((item,index) =>(
          <div key={index} onClick={e => navigateSubjectPage(e, item._id)}>
        <TreeItem nodeId="2" label={item.TypeCategory1}   />
        </div>
      ))}
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
