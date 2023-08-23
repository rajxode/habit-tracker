import { NavLink } from "react-router-dom";




const HabitStatus = () => {

    return(
        <div className="w-2/3 h-full bg-slate-600 ml-1">
            <NavLink to="/">
                <button className="bg-indigo-500">
                    Add Habit
                </button>
            </NavLink>
        </div>
    )
}

export default HabitStatus;