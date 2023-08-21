

const Navbar = () => {

    return(
        <div className="w-full m-0 flex h-14 text-white bg-indigo-400 justify-center items-center">
            <div className="w-[85%] bg-red-200 h-full flex justify-between items-center">
                <div className="bg-slate-500 w-[10%] h-full">
                    logo
                </div>
                <div className="bg-green-400 w-1/5 h-full">
                    <ul>
                        <li className="inline-block">
                            <a href="/">
                                Home
                            </a>
                        </li>

                        <li className="inline-block">
                            <a href="/detailspage">
                                Details
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar;