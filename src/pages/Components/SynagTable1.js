import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import AlertDialog from "./synagbutton";

class SynagTable extends React.Component{
    constructor(props){
        super(props)
         this.state={
            columns:[
                { id: 'name', 
                label: 'Name', 
                minWidth: 170, 
                padding:10,
                },
                
               
            ]
         }
         this.addTest=this.addTest.bind(this)
        
    }
    render(){
        return(
        <div className="container">
        <Paper sx={{ width: '100%'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow >
                    <TableCell align="center" colSpan={2}>
                     <h5>Synag Zurnaly</h5>
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

 
export default SynagTable