
import { NavLink } from "react-router-dom";
import { habitSelector, setShowStatus, toggleHabitStatus } from "../Redux/Reducer/habitReducer";
import { useDispatch, useSelector } from "react-redux";
import SingleDayStatus from "./SingleDayStatus";
import { toast } from "react-toastify";

const CalculateDayOfWeek = (date) => {
    var days = new Array();
    for (var i = 6; i >= 0; i--){
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    return days;
}


const HabitStatus = () => {
    const dispatch = useDispatch();
    const { habits, showStatus } = useSelector(habitSelector);
    const weekDays = CalculateDayOfWeek(new Date());

    const handleCloseClick = (e) => {
        e.preventDefault();
        dispatch(setShowStatus(null));
    }

    const toggleStatus = (index,status) => {
        dispatch(toggleHabitStatus({index,status}));
        if(status){
            toast.success(`Task done for ${weekDays[index]}`);
        }
    }

    return(
        <div className="w-2/3 h-full ml-1 flex flex-col p-1">
            <nav className="w-full p-1">
                <NavLink to="/">
                    <button className="bg-indigo-400 hover:bg-indigo-500 float-right p-1 rounded text-white">
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
                            <div className="w-full p-1 h-full">
                                <button className="float-left bg-red-500 text-white px-[5px] rounded-md"
                                        onClick={handleCloseClick}>
                                            X
                                </button>

                                <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                                    <span className="text-black">Habit:</span> {showStatus.name}
                                </h1>


                                <h1 className="text-right text-md font-semibold text-stone-500">
                                    <span>Added On:</span> {showStatus.createdOn}
                                </h1>

                                <div className="w-full h-fill mt-[5%] bg-fixed overflow-scroll">
                                    <h1 className="w-full text-center text-lg font-semibold">Your Weekly Progress:</h1>
                                    <div className="w-full h-full p-2 flex flex-row justify-between flex-wrap items-center mt-[2%]">
                                        {weekDays.map((day,i) =>  <SingleDayStatus key={i}
                                                                                day={day}
                                                                                i={i}
                                                                                status={showStatus.weekStatus[i]}
                                                                                toggleStatus={toggleStatus} />)}
                                    </div>
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