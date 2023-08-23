import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu((prev) => !prev);
    }

    return(
        <div className="w-screen h-screen overflow-auto flex flex-col flex-nowrap">
            <div className="w-full m-0 flex h-14 text-black text-lg font-semibold justify-center items-center shadow-lg z-10 shrink-0">
                <div className="w-[95%] sm:w-[85%] h-full flex justify-between items-center flex-wrap">
                    
                    <div className="w-fit h-full flex items-center p-1 overflow-hidden">
                        <NavLink to="/">
                            <img src={require('../Assets/logo.png')} alt="logo" className="w-24 mt-2"/>
                        </NavLink>
                    </div>

                    <div className="hidden w-fit h-full sm:flex items-center">
                        <ul>
                            <li className="inline-block mx-2 text-slate-400">
                                <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                        to='/'>
                                    Home
                                </NavLink>
                            </li>

                            <li className="inline-block mx-2 text-slate-400">
                                <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                        to='/detailspage'>
                                    Details
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                    <button className="sm:hidden" onClick={toggleShowMenu}>
                        <img src={require('../Assets/menu.png')} alt="menu-icon" className="w-[25px] h-[25px]" />
                    </button>

                    {showMenu?
                        <div className="block sm:hid den w-full h-fit bg-white p-1 rounded-b shadow-md border-x-2 border-b-2">
                            <ul className="mx-0 px-1">

                                <li className="border-b p-1 text-slate-400">
                                    <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                            to='/'>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="p-1 text-slate-400">
                                    <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                                to='/detailspage'>
                                        Details
                                    </NavLink>
                                </li>
                                
                            </ul> 
                        </div>    
                        :
                        null
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}


export default Navbar;