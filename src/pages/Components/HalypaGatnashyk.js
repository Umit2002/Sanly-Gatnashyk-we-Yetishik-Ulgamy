import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';


class HalypaGatnashyk  extends React.Component{
    constructor(props){
        super(props)
         this.state={
            students:[
                {
                    name:"Umitjan Zafarow",
                    topar:"3321",
                    dersi:"Database",
                    mugallym:"S.Caryyew",
                    sene:"12.12.2022",
                    yagdayy:"Aldy",
                    kafedra:"Emeli an we Kiberhowpsuzlyk ",
                    gornushi:"Gatnashyk"
                },
                {
                    name:"Umitjan Zafarow",
                    topar:"3321",
                    dersi:"Database",
                    mugallym:"S.Caryyew",
                    mene:"12.12.2022",
                    yagdayy:"Aldy",
                    kafedra:"Emeli an we Kiberhowpsuzlyk ",
                    gornushi:"Gatnashyk"
                },
                {
                    name:"Umitjan Zafarow",
                    topar:"3321",
                    dersi:"Database",
                    mugallym:"S.Caryyew",
                    sene:"12.12.2022",
                    yagdayy:"Aldy",
                    kafedra:"Emeli an we Kiberhowpsuzlyk ",
                    gornushi:"Gatnashyk"
                }
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
                    id: 'Dersi',
                    label: 'Dersi',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toLocaleString('en-US'),
                },
                {
                    id: 'Mugallym',
                    label: 'Mugallym',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Sene',
                    label: 'Sene',                   
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Yagday',
                    label: 'Yagday',                  
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Kafedra',
                    label: 'Kafedra',                  
                    minWidth: 100,
                    align: 'center',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'Gornushi',
                    label: 'Gornushi',                  
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
                    <TableCell align="center" colSpan={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Ählisi" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="3321" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="3331" />
                    </FormGroup>
                   </TableCell>
                   <TableCell align="center" colSpan={2}>
                     <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Ählisi" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Özleşdiren" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Yollanma Alan" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Yollanma Almadyk" />
                     </FormGroup>
                   </TableCell>
                   <TableCell align="center" colSpan={2}>
                     <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Gatnashyk" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Yetishik" />
                    </FormGroup>
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
             {this.state.students.map((item) => (
            <TableRow key={item.id} className="table-striped bg-[#F8F8FA]">
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
                  <h5>{item.topar}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.dersi}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.mugallym}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.sene}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.yagdayy}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.kafedra}</h5>               
                </TableCell>
                <TableCell
                    align="center"
                    style={{ top: 57, minWidth:100 }}
                >
                  <h5>{item.gornushi}</h5>               
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

 
export default  HalypaGatnashyk