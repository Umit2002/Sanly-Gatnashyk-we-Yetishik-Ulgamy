import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Zurnal1 extends React.Component{
    constructor(props){
        super(props)
         this.state={
            subjects:[
                {
                    name:"Umitjan Zafarow",
                    Topar:"3311",
                    Ders1:"90",
                    Ders2:"68",
                    Ders3:"70",
                    Ders4:"80",
                    Ders5:"50",
                    Ders6:"65",
                    Ders7:"90"
                },
                {
                    name:"Umitjan Zafarow",
                    Topar:"3311",
                    Ders1:"90",
                    Ders2:"68",
                    Ders3:"70",
                    Ders4:"80",
                    Ders5:"50",
                    Ders6:"65",
                    Ders7:"90"
                },
                {
                    name:"Umitjan Zafarow",
                    Topar:"3311",
                    Ders1:"90",
                    Ders2:"68",
                    Ders3:"70",
                    Ders4:"80",
                    Ders5:"50",
                    Ders6:"65",
                    Ders7:"90"
                },
            ], 
            columns:[
                { id: 'name', 
                label: 'Name', 
                minWidth: 170, 
                },
                {
                  id: 'Topar',
                  label: 'Topar',                   
                  minWidth: 100,
                  align: 'center',
                  format: (value) => value.toLocaleString('en-US'),
              },
                {
                    id: 'Ders-1',
                    label: 'Ders-1',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toLocaleString('en-US'),
                },
                {
                    id: 'Ders-2',
                    label: 'Ders-2',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toLocaleString('en-US'),
                },
                {
                    id: 'Ders-3',
                    label: 'Ders-3',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Ders-4',
                    label: 'Ders-4',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Ders-5',
                    label: 'Ders-5',                  
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Ders-6',
                    label: 'Ders-6',                  
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Ders-7',
                    label: 'Ders-7',                  
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
            ]
         }
        
        
    }
    render(){
        return(
            <div className="container d-flex">
            <Paper sx={{ width: '100%' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableRow className="bg-[#DFEFFD]">
                   <TableCell align="left" colSpan={2}>
                     <h5>Toparyn Yetishik Zurnaly</h5>
                   </TableCell>
                   <TableCell align="center" colSpan={3}>
                   <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Sentyabr Aralyk Jemleme</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Oktyabr Aralyk jemleme</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Wiza</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Noyabr Aralyk Jemleme</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Dekabr Aralyk jemleme</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Final</Dropdown.Item>
                  </DropdownButton>
                  </ButtonGroup>
                   </TableCell>
                   
              </TableRow>
              </Table>  
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                 <TableBody className="bg-[#F8F8FA] flex-row flex-column">
                    <TableRow>
                     {this.state.columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 57, minWidth: column.minWidth }}
                      >
                      <h5>{column.label}</h5>               
                    </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
                <TableBody>
                 {this.state.subjects.map((item) => (
                <TableRow key={item.id}>
                    <TableCell
                        align="left"
                        style={{ top: 57, minWidth:170 }}
                    >
                      <h5>{item.name}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders1}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders2}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders3}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders4}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders5}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders6}</h5>               
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ top: 57, minWidth:100 }}
                    >
                      <h5>{item.Ders7}</h5>               
                    </TableCell>
                </TableRow>
                 ))}
                </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            </div>    
        )
    }
}

export default Zurnal1