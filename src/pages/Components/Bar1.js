import React, { useState } from 'react';
import {HiMenuAlt3} from "react-icons/hi"
import {FaChalkboardTeacher,FaUserTie,FaUserCheck} from "react-icons/fa"
import {GiTeacher} from "react-icons/gi"
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Link} from 'react-router-dom';
import Gatnashyk from './Gatnashyk';
import { Dropdown } from 'bootstrap';


const Bar1 =()=>{
     
         const [openMug, setOpenMug] = React.useState(false);
         const handleOpenMug = () => {
         setOpenMug(!openMug);
         };
         
         const [openMud, setOpenMud] = React.useState(false);
         const handleOpenMud = () => {
         setOpenMud(!openMud);
         };
        
         const [openHal, setOpenHal] = React.useState(false);
         const handleOpenHal = () => {
         setOpenHal(!openHal);
         };
         
         const [openDec, setOpenDec] = React.useState(false);
         const handleOpenDec = () => {
         setOpenDec(!openDec);
         };

         const [openSec, setOpenSec] = React.useState(false);
         const handleOpenSec = () => {
         setOpenSec(!openSec);
         };
        const [open , setOpen]= useState(true);
        return(
            <section className="flex gap-6">
              <div style={{zIndex:'4'}} className={`bg-[#FFFFFF] min-h-screen ${open? "w-16" : "w-72"} duration-500 text-gray-80 px-3`} id="absolute">
                 <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=> setOpen(!open)}/>
                 </div>
                <div className="dropdown mt-4 flex flex-col gap-4 relative">
                <button onClick={handleOpenMug}>
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                    <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                    <h4 
                                    style={{transitionDelay:`${1+2}00ms`}}
                                    className={`whitespace-pre duration-500 
                                    ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Mugallym 
                                    </h4>
                             </Link>
               </button>
                     
                  {openMug ? (
                     <ul className="menu">
                     <li className="menu-item">
                              <button >
                              <Link to="/Mugallym/Toparlar" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Gatnashyk 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                              <button>
                              <Link to="/Mugallym/Otrobotka" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                       <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                       <h5 
                                       style={{transitionDelay:`${1+2}00ms`}}
                                       className={`whitespace-pre duration-500 
                                       ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Yollanmalar 
                                       </h5>
                              </Link>
                              </button>
                     </li>
                     <li className="menu-item">
                              <button >
                              <Link to="/Mugallym/Synag" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Bahalandyrmak
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     </ul>
                  ) : null}
                  
               </div> 
               <div className="dropdown mt-4 flex flex-col gap-4 relative">
                <button onClick={handleOpenHal}>
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                    <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                    <h4 
                                    style={{transitionDelay:`${2+2}00ms`}}
                                    className={`whitespace-pre duration-500 
                                    ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Halypa 
                                    </h4>
                             </Link>
               </button>
               {openHal ? (
                     <ul className="menu">
                     <li className="menu-item">
                              <button >
                              <Link  to="/Halypa/Gatnashyk1" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Gatnashyk 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                              <button >
                              <Link  to="/Halypa/Gatnashyk" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Gatnashyk 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                              <button >
                              <Link  to="/Halypa/Zurnal1" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+3}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Zurnal 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                              <button >
                              <Link  to="/Halypa/Duydurysh" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+4}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Duydurysh 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                              <button >
                              <Link  to="/Halypa/Temmiler" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Temmiler 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     </ul>
                  ) : null}
              </div>
              <div className="dropdown mt-4 flex flex-col gap-4 relative">
                <button onClick={handleOpenMud}>
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                    <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                    <h4 
                                    style={{transitionDelay:`${3+2}00ms`}}
                                    className={`whitespace-pre duration-500 
                                    ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Mudir 
                                    </h4>
                             </Link>
               </button>
                     
                  {openMud ? (
                     <ul className="menu">
                     <li className="menu-item">
                              <button >
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Tassyklamak 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     <li className="menu-item">
                        <button>
                        <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+3}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Bergili 
                                 </h5>
                        </Link>
                        </button>
                     </li>
                     <li className="menu-item">
                        <button>
                        <Link to="/Mudir/Zurnal" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+4}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Zurnal 
                                 </h5>
                        </Link>
                        </button>
                     </li>
                     <li className="menu-item">
                        <button>
                        <Link to="/Mudir/Duydurysh" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+3}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Duydurysh 
                                 </h5>
                        </Link>
                        </button>
                     </li>
                     <li className="menu-item">
                        <button>
                        <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${1+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Temmiler 
                                 </h5>
                        </Link>
                        </button>
                     </li>
                     </ul>
                  ) : null}      
              </div>
              <div className="dropdown mt-4 flex flex-col gap-4 relative">
                <button onClick={handleOpenDec}>
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                    <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                    <h4 
                                    style={{transitionDelay:`${4+2}00ms`}}
                                    className={`whitespace-pre duration-500 
                                    ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Dekan
                                    </h4>
                             </Link>
               </button>
                     
                  {openDec ? (
                     <ul className="menu">
                     <li className="menu-item">
                              <button >
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${7+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Yollanma 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     </ul>
                  ) : null}      
              </div>

              <div className="dropdown mt-4 flex flex-col gap-4 relative">
                <button onClick={handleOpenSec}>
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                    <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                    <h4 
                                    style={{transitionDelay:`${5+2}00ms`}}
                                    className={`whitespace-pre duration-500 
                                    ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Katip 
                                    </h4>
                             </Link>
               </button>
                     
                  {openSec ? (
                     <ul className="menu">
                     <li className="menu-item">
                              <button >
                              <Link className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                                 <div>{React.createElement(GiTeacher, {size:"20"})}</div>
                                 <h5 
                                 style={{transitionDelay:`${10+2}00ms`}}
                                 className={`whitespace-pre duration-500 
                                 ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>Topar doretmek 
                                 </h5>
                              </Link>
                             </button>
                     </li>
                     </ul>
                  ) : null}      
              </div>
              
              </div>
              
            </section>
          
        )
    

}


export default Bar1
 
 
 