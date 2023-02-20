import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function AuditoriyaDoretmek() {
  return (
    <div className="container">
     <div className="DekanTemmiBermek">
      <h3 style={{textAlign:'center',marginBottom:'5%' }}>Ders Goshmak</h3>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Mugallymlar}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Mugallym" />}
    />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Ders}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Ders" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Toparlar}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Topar" />}
    />      
     <Button style={{background:'white'}} variant="outlined">Goshmak</Button>
    
    </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Toparlar = [
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
  { label: '3421',  },
  
];
const Ders = [
  { label: 'Kiberhowpsuzlyk', },
  { label: 'Kompyuter',  },
  { label: 'Amaly Matematika',  } ,
  { label: 'Fizika',  } 
];
const Mugallymlar = [
  { label: 'Caryyew Shageldi', },
  { label: 'Tagangylyjow Iskender',  },
  { label: 'Kurambayew Yoldashbay',  },
  { label: 'Iskenderow Jumabay',  },
  { label: 'Gummyyew Ilmyrat', }, 
];