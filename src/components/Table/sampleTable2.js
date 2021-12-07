import React, { useMemo ,useEffect, useState} from 'react'
import { useTable, useSortBy } from 'react-table'
import '../Internalworkorder/table.css'
import axios from 'axios';

export  default function SortingTable () {
  
    const names = ["a", "b", "c"];
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td>Names</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Names</td>
              <tr contenteditable='true'>{names[0]}</tr>
              <tr>{names[1]}</tr>
              <tr >{names[2]}</tr>
            </tr>
          </tbody>
        </table>
      </div>
    );

}