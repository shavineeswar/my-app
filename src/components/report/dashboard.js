import React, { Component } from 'react';
import axios from 'axios';
import PieChart from './piechart'
import LineChart from './linechart/linechart'
import ScatterChart from './scatter/scatterChart'



function dashboard() {





    return (
        <div>
            <div className='row'>
            <PieChart/>
            <hr/>
            <LineChart/>
            <hr/>
            </div>

            <div className='row'>
            <ScatterChart/>
            </div>

        </div>

    )

}

export default dashboard;