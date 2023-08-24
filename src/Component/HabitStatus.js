
// to show weekly status of any habit from user's habit list 

// redux hooks
import { useDispatch, useSelector } from "react-redux";

// to navigate to a new route
import { NavLink } from "react-router-dom";

// selector and action from habitReducer
import { habitSelector, setShowStatus } from "../Redux/Reducer/habitReducer";

// component to show weekly status of any habit
import WeekStatus from "./WeekStatus";


// to get list of all the days and dates in last week
const CalculateDayOfWeek = (date) => {
    // array storing all the dates and day
    var days = new Array();
    // storing values in asceding order of date
    for (var i = 6; i >= 0; i--){
        // store values in the form of string
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    // return the array of dates
    return days;
}



// render the section
const HabitStatus = () => {
    // for calling an action from reducer
    const dispatch = useDispatch();

    // getting state variables from the habitReducer
    const { habits, showStatus } = useSelector(habitSelector);

    // getting list of all week days and dates
    const weekDays = CalculateDayOfWeek(new Date());

    // for hiding the weekly status section from screen
    const handleCloseClick = (e) => {
        e.preventDefault();
        // removing the value of selected item from variable on closing the section
        dispatch(setShowStatus(null));
    }


    // render the section
    return(
        // main container
        <div className="w-full md:w-2/3 h-full ml-1 flex flex-col p-1">
            
            {/* a navbar to navigate to home page for adding a new habit to list */}
            <nav className="w-full p-1">
                {/* link to homepage */}
                <NavLink to="/">

                    {/* button to redirect to homepage */}
                    <button className="bg-indigo-400 hover:bg-indigo-500 
                                    float-right p-1 rounded text-white">
                        New Habit
                    </button>
                </NavLink>

            </nav>

            {/* container of status section */}
            <div className="w-full h-full mt-1 p-1 rounded flex flex-col bg-fixed overflow-scroll">
                
                {/* hidden on screen below width "md {medium}" */}
                {/* message to select a item from habit list */}
                <div className="hidden md:block w-full">
                    
                    {/* show when user didn't click on any habit from the habit list */}
                    { !showStatus?
                        <h1 className="text-center text-2xl text-indigo-600 font-semibold">
                            {habits.length !== 0 ?
                                // if list containes some items
                                'Select habit from list to know your weekly status'
                                :
                                // incase the habit list is empty
                                'Add some habits to see your progress'
                            }
                        </h1>
                        :
                        null
                    }
                </div>

                {/* show weekly status of a single habit when user click on habit in the list */}
                {/* hidden on screen below width "medium" */}
                <div className="hidden md:block w-full ">
                    {   
                        // if user click on a habit
                        showStatus ?
                            // show weekly status of task 
                            // passing close section function, selected habit and week days as props
                            <WeekStatus handleCloseClick={handleCloseClick}
                                        showStatus={showStatus}
                                        weekDays={weekDays} />
                            :
                            null
                            
                    }
                </div>

                {/* visible only on screen below medium width */}
                {/* show list of all tha habits along with their weekly status */}
                <div className="block md:hidden w-full h-full">

                    {   
                        // if user's habit list is empty
                        habits.length === 0 ?
                            // show following message
                            <div className="w-full text-2xl text-center font-semibold text-indigo-600">
                                'Nothing in Your List'
                            </div>
                        :
                        // if habit list contains some habits then render each one along with their weekly status
                        habits.map((habit,i) => <WeekStatus key={i}
                                                        // index of habit in the array
                                                        habitIndex = {i}
                                                        // handle close function
                                                        handleCloseClick={handleCloseClick}
                                                        // habit to show info about
                                                        showStatus={habit}
                                                        // array of all the week days and date
                                                        weekDays={weekDays} /> )
                    }

                </div>

            </div>
            
        </div>
    )
}


// export the component
export default HabitStatus;