import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

export default function TalypGoshmak() {
  return (
    <div className="container">
     <div className="DekanTemmiBermek">
      <h3 style={{textAlign:'center',marginBottom:'5%' }}>Talyp Goshmak</h3>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Toparlar}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="TalypBelgisi" />}
    />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Ady}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Ady" />}
    />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Gornushi}
      style={{backgroundColor:'white', marginBottom:'2%'}}
      renderInput={(params) => <TextField {...params} label="Fakulteti" />}
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
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
  { label: '3111', },
  { label: '3211',  },
  { label: '3421',  },
 
];
const Ady = [
  { label: 'Zafarow Umitjan', },
  { label: 'Rasulow Arslan',  },
  { label: 'Bekiyew Azim',  },
  { label: 'Zafarow Umitjan1', },
  { label: 'Rasulow Arslan',  },
  { label: 'Bekiyew Azim',  },
  { label: 'Zafarow Umitjan1', },
  { label: 'Rasulow Arslan',  },
  { label: 'Bekiyew Azim',  },
  { label: 'Zafarow Umitjan1', },
  { label: 'Rasulow Arslan',  },
  { label: 'Bekiyew Azim',  },
 
];
const Gornushi = [
  { label: 'Himya', },
  { label: 'Biologiya',  },
  { label: 'Maglumat',  },
  { label: 'Innowatika', },  
 
];