
import { NavLink } from "react-router-dom";
import { habitSelector } from "../Redux/Reducer/habitReducer";
import { useSelector } from "react-redux";

const HabitStatus = () => {
    const { habits, showStatus } = useSelector(habitSelector);

    const CalculateDayOfWeek = (date) => {
        var days = new Array();
        for (var i = 0; i < 7; i++){
            days[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i);
        }
        return days;
    }

    return(
        <div className="w-2/3 h-full ml-1 flex flex-col p-1">
            <nav className="w-full p-1">
                <NavLink to="/">
                    <button className="bg-indigo-300 hover:bg-indigo-500 float-right p-1 rounded text-white">
                        New Habit
                    </button>
                </NavLink>
            </nav>

            <div className="w-full h-full mt-1 p-1 rounded flex flex-col">
                
                <div className="w-full">
                    
                    { !showStatus?
                        <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                            {habits.length !== 0 ?
                                'Select habit from list to know your weekly status'
                                :
                                'Add some habits to see your progress'
                            }
                        </h1>
                        :
                        null
                    }
                </div>

                <div className="w-full ">
                    {
                        showStatus ?
                            <div className="w-full p-1">
                                <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                                    <span className="text-black">Habit:</span> {showStatus.name}
                                </h1>

                                <h1 className="text-right text-md font-semibold text-stone-500">
                                    <span>Added On:</span> {showStatus.createdOn}
                                </h1>

                                <div className="w-full">
                                    
                                </div>
                            </div>
                            :
                            null
                    }
                </div>

            </div>
            
        </div>
    )
}

export default HabitStatus;