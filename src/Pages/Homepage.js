import { useEffect, useState } from "react";
import AddHabit from "../Component/AddHabit";
import Quote from "../Component/Quote";
import Suggestions from "../Component/Suggestions";
import { useDispatch } from "react-redux";
import { quoteFetchThunk } from "../Redux/Reducer/habitReducer";


const Homepage = () => {
    const [showAddHabit,setShowAddHabit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quoteFetchThunk());
    },[]);

    const toggleAddHabit = (e) => {
        e.preventDefault();
        setShowAddHabit((prev) => !prev);
    }


    return(
        <div className="w-full flex h-full justify-center my-2 overflow-auto bg-fixed">
            <div className="w-[90%] h-fill flex">
                <div className="w-full md:w-2/3 flex flex-col items-center justify-between bg-[#f4faff] h-fill p-2 mr-1 rounded shadow-md">
                    <div className="w-full h-full flex flex-col items-center">
                        <Quote />

                        <div className="w-full sm:w-4/5 mb-1">
                            <button className="bg-[#72a3e9] hover:bg-[#2e4b75] text-md p-[2px] px-[4px] float-right
                                                rounded shadow-sm text-white"
                                    onClick={toggleAddHabit}>
                                {!showAddHabit? "Add Habbit" : "Cancel"}
                            </button>
                        </div>
                    </div>
                    
                    {
                    showAddHabit?
                        <div className="w-full h-full flex justify-center">
                            <AddHabit />
                        </div>
                    :
                        <img src={require('../Assets/homeImage.jpg')} alt="image" className="w-full md:w-4/5 h-2/3 mb-2" />
                    }
                    
                </div>

                <div className="hidden md:block w-1/3 h-full rounded bg-[#f4faff] shadow-md ml-1 bg-fixed overflow-scroll">
                    <Suggestions />
                </div>
            </div>
        </div>            
    )
}

export default Homepage;