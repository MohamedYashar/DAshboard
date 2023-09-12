import React, { useState } from 'react'
import { FaBars, FaTh , FaPaypal, FaAppStore, FaMedrt, FaMix, FaFan} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaBahai } from "react-icons/fa6";

export default function Sidebar({children}) {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = ()=> setIsOpen(!isOpen)

    const menuitem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />,
        },
        {
            path: "/Appoinment",
            name: "Appoinment",
            icon: <FaAppStore />,
        },
        {
            path: "/LabTest",
            name: "LabTest",
            icon: <FaFan />,
        },
        {
            path: "/MedicineOrder",
            name: "MedicineOrder",
            icon: <FaMedrt />,
        },
        {
            path: "/Message",
            name: "Message",
            icon: <FaMix />,
        },
        {
            path: "/Payment",
            name: "Payment",
            icon: <FaPaypal />,
        },
        {
            path: "/Settings",
            name: "Settings",
            icon: <FaBahai />,
        },
    ]


    return (
        <div className='container' >
            <div style={{width: isOpen ? "250px" : "40px"}} className='sidebar'>

                <div className='topsection'>
                <h1 style={{display: isOpen ? "block" : "none"}}  className='logo'> Guvi Sales</h1>
                <div style={{marginLeft: isOpen ? "40px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
                </div>
                {
                    menuitem.map(((item,index) => 
                    <NavLink to={item.path} key={index} className="link" activeclassname = "active" >

                    <div className='icon'>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>))
                }

            </div>


                <main>{children}</main>
        </div>
    )
}
