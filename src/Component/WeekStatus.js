
import { useDispatch } from "react-redux";
import { setShowStatus, toggleHabitStatus } from "../Redux/Reducer/habitReducer";
import SingleDayStatus from "./SingleDayStatus";
import { toast } from "react-toastify";

const WeekStatus = ({habitIndex,handleCloseClick,showStatus,weekDays}) => {

    const dispatch = useDispatch();

    const toggleStatus = (index,status) => {
        dispatch(toggleHabitStatus({habitIndex,index,status}));
        if(status){
            toast.success(`${showStatus.name} done on ${weekDays[index]}`);
        }
    }

    return(
        <div className="w-full p-1 h-full border-b-2 border-indigo-800 md:border-none">
            <button className="hidden md:block float-left bg-red-500 text-white px-[5px] rounded-md"
                    onClick={handleCloseClick}>
                        X
            </button>

            <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                <span className="text-black">Habit:</span> {showStatus.name}
            </h1>


            <h1 className=" text-md font-semibold text-stone-500">

                <span className="md:hidden float-left">Days Completed : {showStatus.completedDays} / 7</span>
                
                <span className="float-right">Added On: {showStatus.createdOn}</span> 
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
    )
}

export default WeekStatus;