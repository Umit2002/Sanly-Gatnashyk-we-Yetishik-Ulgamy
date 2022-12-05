import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



class AlertDialog extends React.Component{
 constructor(props){
   super(props)
   this.state={
     open:false,
     text:"",
     age:""
   }
   this.handleClickOpen=this.handleClickOpen.bind(this)
   this.handleClose=this.handleClose.bind(this)
   this.handleChange=this.handleChange.bind(this)
  } 
     
  handleClickOpen  () {
    this.setState({open:true});
  };

  handleClose(){
    this.setState({open:false});
     
  };
  
  handleChange(event){
    this.setState({age:event.target.value});
   };

 render(){
  return (
    <div>
      <Button variant="outlined" onClick={this.handleClickOpen}>
        Synag goşuň
      </Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Synagyň Görnüşini Saýlaň"}
        </DialogTitle>
        <Box sx={{ maxWidth: 120, minWidth: 320 }}>
          <div className="box">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Saýla</InputLabel>
            <Select
              labelId="demo-simple-select-label "
              id="demo-simple-select"
              value={this.age}
              label="Saýla"
              onChange={this.handleChange}
            >
              <MenuItem value={'Aralyk jemleme'}>Aralyk jemleme</MenuItem>
              <MenuItem value={'Ara synag'}>Ara synag</MenuItem>
              <MenuItem value={'Gaytadan ara synag'}>Gaytadan ara synag</MenuItem>
              <MenuItem value={'Synag'}>Synag</MenuItem> 
              <MenuItem value={'Gaytadan synag'}>Gaytadan synag</MenuItem>
              
            </Select>
          </FormControl>
          <div className="box-1">
            <TextField  fullWidth id="fullWidth" label="sene" variant="outlined" onChange={(e)=> this.setState({text:e.target.value})} />
          </div>
         </div> 
        </Box>
        <DialogActions>
          <Button  onClick={()=> this.props.onAdd({
            id: this.state.age,
            label: this.state.age,
            data:this.state.text,
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
            
          })}>Goşuň</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
}

export default AlertDialog 