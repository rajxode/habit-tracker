
// to show weekly status of a habit selected by user 


// redux hook
import { useDispatch } from "react-redux";

// reducer action to change status of a habit {done, not done, pending}
import { toggleHabitStatus } from "../Redux/Reducer/habitReducer";

// to render a single day habit status 
import SingleDayStatus from "./SingleDayStatus";

// to show toast notification
import { toast } from "react-toastify";



// render the component
/* getting value of { habitIndex = index of habit inside the habit array, 
    handleClose function to hide the component, showStatus = to show status of a habit, 
    weekDays = array of all the days in the week }  from the props*/
const WeekStatus = ({habitIndex,handleCloseClick,showStatus,weekDays}) => {

    // for calling an action
    const dispatch = useDispatch();

    // change the status of a habit on a single day {done, not done, pending}
    const toggleStatus = (dayIndex,status) => {

        // calling action by passing the 
        // {index of habit in the list, index of day in the week, status of the work}
        dispatch(toggleHabitStatus({habitIndex,dayIndex,status}));
        
        // if the status of task is changed to done
        if(status){
            // show toast notification that the follwing task is done on 'day'
            toast.success(`${showStatus.name} done on ${weekDays[dayIndex]}`);
        }
    }


    // render the section
    return(
        // container
        <div className="w-full p-1 h-full border-b-2 border-indigo-800 md:border-none">
            
            {/* button to hide the section */}
            {/* hidden on smaller screen */}
            <button className="hidden md:block float-left bg-red-500 text-white px-[5px] rounded-md"
                    onClick={handleCloseClick}>
                        X
            </button>

            {/* heading showing name of Habit */}
            <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                <span className="text-black">Habit:</span> {showStatus.name}
            </h1>


            {/* heading */}
            <h1 className=" text-md font-semibold text-stone-500">
                
                {/* number of days on which the task is completed */}
                {/* hidden on screen above medium */}
                <span className="md:hidden float-left">Days Completed : {showStatus.completedDays} / 7</span>
                
                {/* to show date of habit creation */}
                <span className="float-right">Added On: {showStatus.createdOn}</span> 
            </h1>

            {/* container showing weekly status of a task */}
            <div className="w-full h-fill mt-[5%] bg-fixed overflow-scroll">
                
                {/* heading */}
                <h1 className="w-full text-center text-lg font-semibold">Your Weekly Progress:</h1>
                
                {/* section containing cards of each day */}
                <div className="w-full h-full p-2 flex flex-row justify-between flex-wrap items-center mt-[2%]">
                    {/* mapping over all the days of week and adding their respective cards */}
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


// export the component
export default WeekStatus;