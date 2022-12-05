import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import AlertDialog from "./synagbutton";

class Test extends React.Component{
    constructor(props){
        super(props)
         this.state={
            columns:[
                { id: 'name', 
                label: 'Name', 
                minWidth: 170, 
                },
                
                {
                    id: 'population',
                    label: 'Population',
                    data:"123",
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toLocaleString('en-US'),
                },
                {
                    id: 'size',
                    label: 'Size\u00a0(km\u00b2)',
                    data:"1234",
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toLocaleString('en-US'),
                },
                {
                    id: 'density',
                    label: 'Density',
                    data:"125",
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'density',
                    label: 'Density',
                    data:"123",
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
            ]
         }
         this.addTest=this.addTest.bind(this)
        
    }
    render(){
        return(
        <div className="container">
        <Paper sx={{ width: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow >
                    <TableCell align="center" colSpan={2}>
                     <h5>Hello</h5>
                   </TableCell>
                   <TableCell align="center" colSpan={3}>
                     <AlertDialog onAdd={this.addTest}/>
                   </TableCell>
            </TableRow>
          </Table>  
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
             <TableBody>
                <TableRow>
                 {this.state.columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                 <div>
                     <p>{column.label}</p>
                     <p>{column.data}</p>
                 </div>    
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
            <TableBody>

            </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        </div>  
        )
    }

   addTest(Test){
    this.setState({columns:[...this.state.columns, {...Test}]}); 
    console.log(Test)
   }
    
}

 
export default Test