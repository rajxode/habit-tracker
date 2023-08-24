
import { NavLink } from "react-router-dom";
import { habitSelector, setShowStatus } from "../Redux/Reducer/habitReducer";
import { useDispatch, useSelector } from "react-redux";
import WeekStatus from "./WeekStatus";
import { hydrate } from "react-dom";


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


    return(
        <div className="w-full md:w-2/3 h-full ml-1 flex flex-col p-1">
            <nav className="w-full p-1">
                <NavLink to="/">
                    <button className="bg-indigo-400 hover:bg-indigo-500 float-right p-1 rounded text-white">
                        New Habit
                    </button>
                </NavLink>
            </nav>

            <div className="w-full h-full mt-1 p-1 rounded flex flex-col bg-fixed overflow-scroll">
                
                <div className="hidden md:block w-full">
                    
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

                <div className="hidden md:block w-full ">
                    {
                        showStatus ?
                            <WeekStatus handleCloseClick={handleCloseClick}
                                        showStatus={showStatus}
                                        weekDays={weekDays} />
                            :
                            null
                            
                    }
                </div>

                <div className="block md:hidden w-full h-full">

                    {
                        habits.length === 0 ?
                            <div>
                                'Nothing in Your List'
                            </div>
                        :
                        habits.map((habit,i) => <WeekStatus key={i}
                                                        habitIndex = {i}
                                                        handleCloseClick={hydrate}
                                                        showStatus={habit}
                                                        weekDays={weekDays} /> )
                    }

                </div>

            </div>
            
        </div>
    )
}

export default HabitStatus;