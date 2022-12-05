import React, { useState } from 'react';
import {HiMenuAlt3} from "react-icons/hi"
import {FaChalkboardTeacher,FaUserTie,FaUserCheck} from "react-icons/fa"
import {GiTeacher} from "react-icons/gi"
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Link} from 'react-router-dom';
import Gatnashyk from './Gatnashyk';


const Bar =()=>{
     
      
       const menus =[
          {name:"Mugallym",link:"", icon: GiTeacher},
          {name:"Halypa",link:"", icon: FaChalkboardTeacher},
          {name:"Mudir",link:"", icon: FaUserTie},
          {name:"Dekan",link:"", icon: FaUserCheck},
       ]
        const [open , setOpen]= useState(true);
        return(
            <section className="flex gap-6">
              <div className={`bg-[#FFFFFF] min-h-screen ${open? "w-16" : "w-72"} duration-500 text-gray-80 px-3`} id="absolute">
                 <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=> setOpen(!open)}/>
                 </div>
                 <div className="mt-4 flex flex-col gap-4 relative">
                   {menus?.map((menu, i)=>(
                   <Link to={menu?.link} key={i} className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                      <div>{React.createElement(menu?.icon, {size:"20"})}</div>
                      <h4 
                      style={{transitionDelay:`${i+2}00ms`}}
                      className={`whitespace-pre duration-500 
                      ${open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name} 
                       </h4>
                  </Link>
                   ))}
                </div>    
              </div>
              <div className=" m-3 text-xl font-semibold w-100" id="boot">
                  <Gatnashyk/>
              </div>
            </section>
          
        )
    

}

export default Bar