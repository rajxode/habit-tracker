
import ListItem from "./ListItem";



const Suggestions = () => {

    return(
        <>
            <nav className="w-full h-[55px] text-lg text-indigo-700 
                            font-semibold shadow-md p-2 flex justify-center 
                            items-center sticky top-0 bg-[#f4faff]" >
                Suggestions
            </nav>

            <div className="w-full flex flex-col h-fill p-2 overflow-auto">

            </div>
            
        </>
    )
}

export default Suggestions;