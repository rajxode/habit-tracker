import AddHabit from "../Component/AddHabit";
import Quote from "../Component/Quote";
import Suggestions from "../Component/Suggestions";


const Homepage = () => {
    return(
        <div className="w-full flex h-full justify-center my-2">
            <div className="w-[90%] h-fill flex">
                <div className="w-2/3 flex flex-col items-center bg-indigo-50 h-fill p-2 mr-1 rounded shadow-md">
                    <Quote />

                    <div className="w-4/5 mb-1">
                        <button className="bg-[#1450A3] text-md p-[2px] px-[4px] float-right
                                            rounded shadow-sm text-white">
                            Add Habbit
                        </button>
                    </div>
                    
                    <AddHabit />
                </div>

                <div className="w-1/3 h-fill rounded shadow-md ml-1">
                    <Suggestions />
                </div>
            </div>
        </div>            
    )
}

export default Homepage;