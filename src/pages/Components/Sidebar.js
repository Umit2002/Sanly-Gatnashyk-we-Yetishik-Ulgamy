import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import {IconContext}from 'react-icons/lib';





const  NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height:80px;
  display: flex;
  justify-content: center;
  position: fixed;
  top :0;
  left : ${({sidebar})=>(sidebar ? "0" : "100%")};
  transition: 350ms;
  z-index:10; 
`;

const SidebarWrap = styled.div`
   width:100px; 
   padding:5%;
`;


const Sidebar =()=>{
    const[sidebar, setsidebar]= useState(false);
    const showSidebar =()=>setsidebar(!sidebar);

    return(
        <>
           <IconContext.Provider value={{color:"#fff"}}>
              
                   <NavIcon to="#">
                       <FaIcons.FaBars onClick={showSidebar}/>
                   </NavIcon>
                   
               
               <div className="sideBarNav" >
                    <SidebarWrap >
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item ,index)=>{
                            return<SubMenu item={item} key={index}/>;
                        })}
                    </SidebarWrap>
               </div>
           </IconContext.Provider>
        </>
    )
};

export default Sidebar;

