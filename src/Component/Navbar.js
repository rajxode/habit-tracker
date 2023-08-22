import { Outlet } from "react-router-dom";


const Navbar = () => {

    return(
        <div className="w-screen h-screen overflow-auto flex flex-col flex-nowrap">
            <div className="w-full m-0 flex h-14 text-black text-lg font-semibold justify-center items-center shadow-lg z-10">
                <div className="w-[85%] h-full flex justify-between items-center">
                    <div className="w-fit h-full flex items-center p-1">
                        logo
                    </div>
                    <div className="w-fit h-full flex items-center">
                        <ul>
                            <li className="inline-block mx-2">
                                <a href="/">
                                    Home
                                </a>
                            </li>

                            <li className="inline-block mx-2">
                                <a href="/detailspage">
                                    Details
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}


export default Navbar;