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
import Zurnal1 from './pages/Components/Zurnal'
import Duydurysh from './pages/Components/Duydurysh';
import Temmiler from './pages/Components/Temmiler';
import HalypaGatnashyk1 from './pages/Components/HalypaGatnashyk1';
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
            <Route path='/Test' element={<Zurnal1 />} /> 
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