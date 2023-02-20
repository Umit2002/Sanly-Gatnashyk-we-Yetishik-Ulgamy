import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gatnashyk from './pages/Components/Gatnashyk';
import Otrobotka from './pages/Components/Gelmediyapmak';
import Toparlar from './pages/Components/toparlar'
import Bar1 from './pages/Components/Bar1'
import Sidebar from './pages/Components/Sidebar';
import Synag from'./pages/Components/Synag';
import HalypaGatnashyk from './pages/Components/HalypaGatnashyk'
import Zurnal from './pages/Components/Zurnal1'
import MudirBergiler from './pages/Components/MudirBergiler'
import Duydurysh from './pages/Components/Duydurysh';
import Temmiler from './pages/Components/Temmiler';
import HalypaGatnashyk1 from './pages/Components/HalypaGatnashyk1';
import MudirZuranl from './pages/Components/MudirZurnal';
import MudirDuydurysh from './pages/Components/MudirDuydurysh';
import MudirTemmiler from './pages/Components/MudirTemmiler';
import MudirHasap from './pages/Components/MudirHasap';
import MudirTassyklamak from './pages/Components/MudirTassyklamak';
import DekanTassyklamak from './pages/Components/DekanTassyklamak';
import DekanHasabaAlmak from './pages/Components/DekanHasabaAlmak';
import DekanTemmiBermek from './pages/Components/DekanTemmiBermek';
import TalypGoshmak from './pages/Components/TalypGoshmak';
import ToparGoshmak from './pages/Components/ToparGoshmak';
import ToparDoretmek from './pages/Components/ToparDoretmek';
import DersGoshmak from './pages/Components/DersGoshmak'
import AuditoriyaDoretmek from './pages/Components/AuditoriyaDoretmek'
class App extends React.Component{
    

    render(){
        const LoggedIn = true;
        let routes;
      if(LoggedIn){  
      routes = (
        <div><Bar1/>
        <Routes>
            <Route path='/Halypa/Duydurysh' element={<Duydurysh />} />
            <Route path='/Halypa/Temmiler' element={<Temmiler />} /> 
            <Route path='/Mudir/Zurnal' element={<MudirZuranl />} /> 
            <Route path='/Mudir/Hasap' element={<MudirHasap />} />
            <Route path='/Talyp/Goshmak' element={<TalypGoshmak />} />
            <Route path='/Topar/Goshmak' element={<ToparGoshmak />} />
            <Route path='/Topar/Doretmek' element={<ToparDoretmek />} />
            <Route path='/Ders/Goshmak' element={<DersGoshmak />} />
            <Route path='/Auditoriya/Doretmek' element={<AuditoriyaDoretmek />} />
            <Route path='/Mudir/Tassyklamak' element={<MudirTassyklamak />} />
            <Route path='/Dekan/TemmiBermek' element={<DekanTemmiBermek />} />
            <Route path='/Dekan/Tassyklamak' element={<DekanTassyklamak />} />
            <Route path='/Dekan/HasabaAlmak' element={<DekanHasabaAlmak />} />
            <Route path='/Mudir/Duydurysh' element={<MudirDuydurysh />} />\
            <Route path='/Mudir/Temmiler' element={<MudirTemmiler />} />
            <Route path='/Mudir/Bergiler' element={<MudirBergiler />} />
            <Route path='/Halypa/Zurnal1' element={<Zurnal />} /> 
            <Route path='/Halypa/Gatnashyk1' element={<HalypaGatnashyk1 />} /> 
            <Route path='/Halypa/Gatnashyk' element={<HalypaGatnashyk />} /> 
            <Route path='/Halypa/Gatnashyk' element={<HalypaGatnashyk />} /> 
            <Route path='/Mugallym/Synag' element={<Synag />} />
            <Route path='/Mugallym/Toparlar/Gatnashyk' element={<Gatnashyk />} />
            <Route path='/Mugallym/Otrobotka' element={<Otrobotka />} />
            <Route path='/Mugallym/Toparlar' element={<Toparlar />} />
            <Route path='/Bar1' element={<Bar1 />} />
        </Routes>
        </div>
    ) 
}
else {
    routes = (
        <Routes>
            <Route index element={<Login /> } />
        </Routes>
    )
}
        return(
        <BrowserRouter>
        
        {routes}
       </BrowserRouter>
     )        
    }
}

export default App