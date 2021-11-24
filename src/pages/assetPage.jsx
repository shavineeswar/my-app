import * as React from 'react';
import Treestruc from '../components/asset/tressStructure'
import Oneasset from '../components/asset/oneAsset'
import Oneinternalworkorder from '../components/Internalworkorder/testfront'
import "../components/asset/tree.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
        return (
            <div>
                <br />

                <div className="row">

                    <div className="col col-lg-2 offset-md-0">
                        <div class="container">
                            <Treestruc />
                        </div>
                    </div>


                    <div class="col-md-10 offset-md-2.5">
                        <div class="container">

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                                        <Tab label="Asset Details" {...a11yProps(0)} />
                                        <Tab label="Maintenace Details" {...a11yProps(1)} />

                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                               
                                <Oneasset />

                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Oneinternalworkorder/>
                                </TabPanel>

                            </Box>
                        </div>
                    </div>

                </div>
            </div>


        );
    
}
