import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData =[
    {
        title:"Abaut Us",
        path:"",
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,

        subNav:[
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
        ],

    },
    {
        title:"Servise",
        path:"",
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,

        subNav:[
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>,
                cName:"sub-nav"
            },
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>,
                cName:"sub-nav"
            },
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
        ],
    },
    {
        title:"Contact",
        path:"",
        icon:<AiIcons.AiFillHome/>,
    },
    {
        title:"Events",
        path:"",
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        
        subNav:[
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
            {
                title:"Our Aim",
                path:"",
                icon:<IoIcons.IoIosPaper/>
            },
        ],
    },
    {
        title:"Support",
        path:"",
        icon:<AiIcons.AiFillHome/>,
    }
]