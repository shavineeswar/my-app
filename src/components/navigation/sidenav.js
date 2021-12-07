import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Asset from '../asset/oneAsset'
import Mainphoto from '../Photos/navhead.png'
import { colors } from '@mui/material';
import './sidenav.css'



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function navigateSubjectPage(value, assetId) {
    setValue(value)
    window.location = `/${assetId}`
  }

  return (
    <Box
      sx={{ flexGrow: 2, padding: "5px", alignItems: 'center', display: 'flex', bgcolor: 'rgb(238, 238, 238);', boxShadow: '3px 5px 5px #444;', borderRadius: 3 }}
    >

      <div style={{ height: "100%", overflow: "auto", }}>
        <br />
        <Tabs
          orientation="vertical"
          variant="scrollable"
          // value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider',}}
        >
          <a href="/"><center><img className='navheadimg' src={Mainphoto} /></center></a>
          <br />
          <div className='tabs'><Tab label="User Management" href="/one" value='0' /></div>
          <div className='tabs'><Tab label="Alert Management" href="/one" value='1' /></div>
          <div className='tabs'><Tab label="Asset Management" href="/one" value='2' /></div>
          <div className='tabs'><Tab label="Work Order" href="/workorder" value='3' /></div>
          <div className='tabs'><Tab label="Scheduling" {...a11yProps(4)} href="/one" value='4' /></div>
          <div className='tabs'><Tab label="Reporting" {...a11yProps(5)} href="/one" value='5' /></div>
          <div className='tabs'><Tab label="Knowledge Hub" {...a11yProps(6)} href="/one" value='6' /></div>
          <div className='tabs'><Tab label="Marketplace" {...a11yProps(7)} href="/one" value='7' /></div>
          <div className='tabs'><Tab label="Account Management" {...a11yProps(8)} href="/one" value='8' /></div>

        </Tabs>
      </div>
    </Box>
  );
}
