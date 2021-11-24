import React, { Component } from 'react';
import axios from 'axios';
import PieChart from './piechart'
import LineChart from './linechart/linechart'
import ScatterChart from './scatter/scatterChart'
import './dashboard.css'


function dashboard() {

    return (
        <div>

            
                <ScatterChart />
           
            
                
                            <PieChart />
                       
                            <LineChart />

        </div>

    )

}

export default dashboard;