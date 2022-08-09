import React,{useState} from 'react'
import Store from '../icons/Store';
import Home from '../icons/Home';
import Discount from '../icons/Discount';
import Graph from '../icons/Graph';
import { Link } from 'react-router-dom';
import Settings from '../icons/Settings';
import Logout from '../icons/Logout';
import AddIcon from '../icons/AddIcon';


const menus = [
    { name: "home", icon: <Home/> },
    { name: "graph", icon: <Graph/> },
    { name: "add", icon: <AddIcon/> },
    { name: "settings", icon: <Settings/> },
    { name: "logout", icon: <Logout/> },
  ];

  



const Sidebar = ()=>{
    const [activemenu,setActive]=useState("home")

    return(
        <>
        <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
            <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
                
            </button>
            <div className="flex flex-col gap-y-4 items-end self-end">
                {menus.map(menu=>(
                        <div onClick={()=>setActive(menu.name)} className={activemenu==menu.name?'bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom':'rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'}>
                            <Link to={`/admin/${menu.name}`}>
                                <button
                                className="p-4 my-4 mr-4 ml-3 rounded-xl"
                                >
                                {menu.icon}
                                </button>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Sidebar;