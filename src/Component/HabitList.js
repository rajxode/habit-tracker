
import { useSelector } from "react-redux";
import HabitListItem from "./HabitListItem";
import { habitSelector } from "../Redux/Reducer/habitReducer";

const HabitList = () => {
    const { habits } = useSelector(habitSelector);

    return(
        <div className="w-1/3 h-full bg-fixed overflow-scroll">

            <nav className="w-full h-[55px] text-lg text-indigo-700 
                            font-semibold shadow-md p-2 flex justify-center 
                            items-center sticky top-0 bg-[#f4faff]" >
                Your Habit List
            </nav>

            <div className="w-full flex flex-col h-fill p-2 overflow-auto">
                { habits.map((habit,i) => <HabitListItem key={i}
                                                    habit={habit} />)}
            </div>
        </div>
    )
}

export default HabitList;