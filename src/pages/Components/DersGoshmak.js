import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function DersGoshmak() {
  return (
    <div className="container">
     <div className="DekanTemmiBermek">
      <h3 style={{textAlign:'center',marginBottom:'5%' }}>Ders Goshmak</h3>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Gornushi}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Fakulteti" />}
    />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Kafedrasy}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Kafedrasy" />}
    />
      <Box
      component="form"
      sx={{
        '& > :not(style)': { backgroundColor:'white', marginBottom:'2%',width:'100%' },
      }}
      noValidate
      autoComplete="off" >
      <TextField id="outlined-basic" label="Ders" variant="outlined" />
     
    </Box>
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
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
 
];
const Kafedrasy = [
  { label: 'Kiberhowpsuzlyk', },
  { label: 'Kompyuter',  },
  { label: 'Amaly Matematika',  } 
];
const Gornushi = [
  { label: 'Himya', },
  { label: 'Biologiya',  },
  { label: 'Maglumat',  },
  { label: 'Kiberfizika',  },
  { label: 'Innowatika', }, 
];