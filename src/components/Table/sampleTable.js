import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1000
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',  
    },
    firsthead: {
        fontWeight: 'bold',
        width:"30%",
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)  
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));


function MTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [WorkOrder, setWorkOrder] = useState([])
    const [Search, setSearch] = useState('')
    const [Searchitem, setSearchitem] = useState([])
    const [Startdate, setStartdate] = useState('')
    const [Enddate, setEnddate] = useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

     

        //  setSearchitem(WorkOrder.filter(item => {
        //     return item.workorderId.toLowerCase().indexOf(Search.toLowerCase()) !== -1
        // }))



    useEffect(() => {

        axios.get('http://localhost:8089/internalwork/getall')
            .then(response => {
                console.log('all workorder', response.data)
                setWorkOrder(response.data.data)
            })
    }, [])



    return (
        <>
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.firsthead}>WorkOrder ID</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Generated Date</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Due Date</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {WorkOrder.length > 0 && WorkOrder.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={row.workorderId}>
                            <TableCell>
                                <Typography className={classes.name}>{row.workorderId}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="body2">{row.date}</Typography>
                            </TableCell>
                            <TableCell>21/12/2021</TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Pending' && 'blue') ||
                                                (row.status === 'Completed' && 'green'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter >
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={WorkOrder.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    );
}

export default MTable;